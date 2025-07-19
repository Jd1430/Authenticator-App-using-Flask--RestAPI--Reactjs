from flask import Blueprint, jsonify, request
from database_utils import get_formatted_database_info, export_database_to_json, get_database_summary
import os

db_bp = Blueprint('database', __name__)

@db_bp.route('/api/database/info', methods=['GET'])
def get_database_info():
    """
    Get complete formatted database information
    """
    try:
        db_info = get_formatted_database_info()
        return jsonify(db_info)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@db_bp.route('/api/database/summary', methods=['GET'])
def get_summary():
    """
    Get database summary with recent activity
    """
    try:
        summary = get_database_summary()
        return jsonify(summary)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@db_bp.route('/api/database/export', methods=['POST'])
def export_database():
    """
    Export database information to JSON file
    """
    try:
        filename = request.json.get('filename', 'database_export.json')
        result = export_database_to_json(filename)
        
        if result['success']:
            return jsonify({
                'success': True,
                'message': f'Database exported to {filename}',
                'filename': filename
            })
        else:
            return jsonify({'error': result['error']}), 500
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@db_bp.route('/api/database/tables/<table_name>', methods=['GET'])
def get_table_info(table_name):
    """
    Get information about a specific table
    """
    try:
        db_info = get_formatted_database_info()
        
        if table_name in db_info['schema']['tables']:
            table_info = {
                'table_name': table_name,
                'schema': db_info['schema']['tables'][table_name],
                'data': db_info['data'].get(f'{table_name}s', [])  # Handle plural form
                if table_name == 'user' else db_info['data'].get('otp_tokens', [])
            }
            return jsonify(table_info)
        else:
            return jsonify({'error': f'Table {table_name} not found'}), 404
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@db_bp.route('/api/database/statistics', methods=['GET'])
def get_statistics():
    """
    Get database statistics
    """
    try:
        db_info = get_formatted_database_info()
        return jsonify(db_info['statistics'])
    except Exception as e:
        return jsonify({'error': str(e)}), 500 