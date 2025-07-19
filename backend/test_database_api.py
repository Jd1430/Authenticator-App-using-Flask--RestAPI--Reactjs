import requests
import json

BASE_URL = 'http://localhost:5000'

def test_database_endpoints():
    """Test all database API endpoints"""
    
    print("Testing Database API Endpoints...")
    print("=" * 50)
    
    # Test 1: Get database info
    print("\n1. Testing /api/database/info")
    try:
        response = requests.get(f'{BASE_URL}/api/database/info')
        if response.status_code == 200:
            data = response.json()
            print("✅ Success!")
            print(f"   Database: {data.get('database_name')}")
            print(f"   Type: {data.get('database_type')}")
            print(f"   Total Users: {data.get('statistics', {}).get('total_users')}")
            print(f"   Total OTP Tokens: {data.get('statistics', {}).get('total_otp_tokens')}")
        else:
            print(f"❌ Failed with status code: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 2: Get database summary
    print("\n2. Testing /api/database/summary")
    try:
        response = requests.get(f'{BASE_URL}/api/database/summary')
        if response.status_code == 200:
            data = response.json()
            print("✅ Success!")
            print(f"   Total Users: {data.get('total_users')}")
            print(f"   Total OTP Tokens: {data.get('total_otp_tokens')}")
            print(f"   Recent Users: {len(data.get('recent_users', []))}")
            print(f"   Recent OTP Tokens: {len(data.get('recent_otp_tokens', []))}")
        else:
            print(f"❌ Failed with status code: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 3: Get statistics
    print("\n3. Testing /api/database/statistics")
    try:
        response = requests.get(f'{BASE_URL}/api/database/statistics')
        if response.status_code == 200:
            data = response.json()
            print("✅ Success!")
            print(f"   Statistics: {json.dumps(data, indent=2)}")
        else:
            print(f"❌ Failed with status code: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 4: Get user table info
    print("\n4. Testing /api/database/tables/user")
    try:
        response = requests.get(f'{BASE_URL}/api/database/tables/user')
        if response.status_code == 200:
            data = response.json()
            print("✅ Success!")
            print(f"   Table: {data.get('table_name')}")
            print(f"   Columns: {len(data.get('schema', {}).get('columns', []))}")
            print(f"   Data Rows: {len(data.get('data', []))}")
        else:
            print(f"❌ Failed with status code: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 5: Get OTP token table info
    print("\n5. Testing /api/database/tables/otp_token")
    try:
        response = requests.get(f'{BASE_URL}/api/database/tables/otp_token')
        if response.status_code == 200:
            data = response.json()
            print("✅ Success!")
            print(f"   Table: {data.get('table_name')}")
            print(f"   Columns: {len(data.get('schema', {}).get('columns', []))}")
            print(f"   Data Rows: {len(data.get('data', []))}")
        else:
            print(f"❌ Failed with status code: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # Test 6: Export database
    print("\n6. Testing /api/database/export")
    try:
        response = requests.post(f'{BASE_URL}/api/database/export', 
                               json={'filename': 'test_export.json'})
        if response.status_code == 200:
            data = response.json()
            print("✅ Success!")
            print(f"   Message: {data.get('message')}")
            print(f"   Filename: {data.get('filename')}")
        else:
            print(f"❌ Failed with status code: {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    print("\n" + "=" * 50)
    print("Database API Testing Complete!")

if __name__ == '__main__':
    test_database_endpoints() 