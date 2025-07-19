from flask import Flask, jsonify
from flask_cors import CORS
from database import db
from routes.auth_routes import auth_bp
from routes.database_routes import db_bp
from email_utils import mail
from flask_mail import Mail
from dotenv import load_dotenv
import os

load_dotenv()

# Set development environment
os.environ['FLASK_ENV'] = 'development'

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///auth.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Email setup (optional for development)
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

# Init
db.init_app(app)
mail.init_app(app)
app.register_blueprint(auth_bp)
app.register_blueprint(db_bp)

@app.route('/')
def home():
    return jsonify({"message": "Auth API is running!"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
