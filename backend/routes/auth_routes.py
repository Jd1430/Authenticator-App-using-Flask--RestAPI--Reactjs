from flask import Blueprint, request, jsonify
from database import db
from models import User, OTPToken
from auth import hash_password, check_password, generate_token, decode_token
from email_utils import generate_otp, send_otp
from datetime import datetime, timedelta
from functools import wraps

auth_bp = Blueprint('auth', __name__)

def auth_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        user_id = decode_token(token)
        if not user_id:
            return jsonify({"message": "Unauthorized"}), 401
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404
        request.user = user
        return f(*args, **kwargs)
    return wrapper

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"message": "Email already exists"}), 400
    user = User(
        name=data['name'],
        email=data['email'],
        password_hash=hash_password(data['password'])
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "Registered successfully"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if not user or not check_password(data['password'], user.password_hash):
        return jsonify({"message": "Invalid credentials"}), 401
    token = generate_token(user.id)
    return jsonify({"token": token})

@auth_bp.route('/my-details', methods=['GET'])
@auth_required
def my_details():
    user = request.user
    return jsonify({
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "created_at": user.created_at
    })

@auth_bp.route('/change-password', methods=['POST'])
@auth_required
def change_password():
    data = request.json
    user = request.user
    if not check_password(data['old_password'], user.password_hash):
        return jsonify({"message": "Old password is incorrect"}), 400
    user.password_hash = hash_password(data['new_password'])
    db.session.commit()
    return jsonify({"message": "Password updated"}), 200

@auth_bp.route('/forget-password', methods=['POST'])
def forget_password():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if not user:
        return jsonify({"message": "Email not found"}), 404
    otp = generate_otp()
    send_otp(user.email, otp)
    token_entry = OTPToken(email=user.email, token=otp)
    db.session.add(token_entry)
    db.session.commit()
    return jsonify({"message": "OTP sent to email"}), 200

@auth_bp.route('/reset-password', methods=['POST'])
def reset_password():
    data = request.json
    otp_entry = OTPToken.query.filter_by(email=data['email'], token=data['token']).order_by(OTPToken.created_at.desc()).first()
    if not otp_entry or datetime.utcnow() - otp_entry.created_at > timedelta(minutes=10):
        return jsonify({"message": "OTP invalid or expired"}), 400
    user = User.query.filter_by(email=data['email']).first()
    user.password_hash = hash_password(data['new_password'])
    db.session.commit()
    return jsonify({"message": "Password reset successful"}), 200
