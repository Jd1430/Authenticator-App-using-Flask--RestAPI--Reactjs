# Authenticator App : https://authenticator-app-using-flask-restapi-jlvj.onrender.com/

A full-stack web application with authentication, user management, and database utilities. This project is organized into a backend (Python/Flask, REST API) and a frontend (React.js), designed for easy deployment and extensibility.

## Features
- User authentication (register, login, password reset)
- User details management
- Database export/import utilities
- Email notifications
- Modern React frontend
- **RESTful API** for frontend-backend communication

## Tech Stack
- **Backend:** Python, Flask, SQLite — exposes a **RESTful API** for authentication, user management, and database operations
- **Frontend:** React.js, JavaScript

## Folder Structure
```
Authenticator-App-using-Flask--RestAPI--Reactjs/
  backend/           # Flask backend API and utilities
    app.py           # Main Flask app
    auth.py          # Authentication logic
    database.py      # Database models and helpers
    models.py        # SQLAlchemy models
    routes/          # API route definitions (REST API endpoints)
    ...
  frontend/          # React frontend
    src/
      pages/         # React page components
      api/           # API call utilities
      ...
```

## Getting Started

### Prerequisites
- Node.js & npm (for frontend)
- Python 3.x (for backend)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. (Optional) Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the backend server:
   ```bash
   python app.py
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

The frontend will typically run on [http://localhost:3000](http://localhost:3000) and the backend on [http://localhost:5000](http://localhost:5000).

## Usage
- Register a new user or log in with existing credentials.
- Access database utilities and user management features from the dashboard.
- The **frontend communicates with the backend via REST API endpoints** for all authentication, user, and database operations.
- Use the provided API endpoints for integration (see `backend/routes/` for REST API route definitions).

## Snapshots
**1.Home Page** 
<img width="1887" height="911" alt="Screenshot 2025-07-19 142404" src="https://github.com/user-attachments/assets/e0fb7e9e-dc1b-4c48-97da-36bfda85289e" />
**2.Register Page**
<img width="1889" height="912" alt="Screenshot 2025-07-19 142618" src="https://github.com/user-attachments/assets/490a0851-66c0-45e1-92de-0b1f2665fb9f" />
**3.Login Page**
<img width="1890" height="910" alt="Screenshot 2025-07-19 142655" src="https://github.com/user-attachments/assets/ea293d91-3483-47ac-99a8-1e209724ba75" />
**4.My Profile Page**
<img width="1881" height="904" alt="Screenshot 2025-07-19 142712" src="https://github.com/user-attachments/assets/91cd4030-b2b8-4325-a6e6-f7b0f5316a83" />
**5.Change Password Page** 
<img width="1879" height="906" alt="Screenshot 2025-07-19 142739" src="https://github.com/user-attachments/assets/5e669ccf-0279-4da6-a4b3-2032bbc062ad" />
**6.Forget Password Page** 
<img width="1882" height="911" alt="Screenshot 2025-07-19 142809" src="https://github.com/user-attachments/assets/680f8dc7-743d-4a44-81a9-f82c80b1a0c2" />
**7.Reset Password Page** 
<img width="1894" height="914" alt="Screenshot 2025-07-19 142849" src="https://github.com/user-attachments/assets/247b1f4d-36f8-4811-b699-7a737c914b0c" />
**8.Database Dashboard Page**
<img width="1889" height="907" alt="Screenshot 2025-07-19 142931" src="https://github.com/user-attachments/assets/1300b544-25eb-4c01-b167-eda394e1e20d" />
<img width="1874" height="908" alt="Screenshot 2025-07-19 142953" src="https://github.com/user-attachments/assets/24345b96-9bc1-446a-a8b3-1eb148fa0840" />












## Contact
- Jayanth Devaraj Gowda 
- jayanthdevarajgowda@gmail.com
- 7411257611
