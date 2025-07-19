# Zysk Technologies

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
Zysk Technologies/
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
  DATABASE_DOCUMENTATION.md # Database schema and docs
  test_frontend_connection.html # Frontend-backend connection test
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

## Contribution Guidelines
1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or support, please contact the project maintainer. 