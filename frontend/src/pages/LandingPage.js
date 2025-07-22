import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '100px auto', 
      padding: '40px', 
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ 
        color: '#333', 
        marginBottom: '20px',
        fontSize: '2.5rem'
      }}>
        Welcome to Auth App
      </h1>
      
      <p style={{ 
        color: '#666', 
        marginBottom: '40px',
        fontSize: '1.1rem',
        lineHeight: '1.6'
      }}>
        A secure authentication system with user registration, login, and password management.
      </p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={() => navigate('/register')}
          style={{
            padding: '15px 30px',
            fontSize: '1.1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            minWidth: '150px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          Register
        </button>
        
        <button
          onClick={() => navigate('/login')}
          style={{
            padding: '15px 30px',
            fontSize: '1.1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            minWidth: '150px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Login
        </button>

        <button
          onClick={() => navigate('/database')}
          style={{
            padding: '15px 30px',
            fontSize: '1.1rem',
            backgroundColor: '#6f42c1',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            minWidth: '150px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5a32a3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#6f42c1'}
        >
          Database
        </button>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'white', borderRadius: '5px' }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>Features</h3>
        <ul style={{ 
          textAlign: 'left', 
          color: '#666',
          listStyle: 'none',
          padding: 0
        }}>
          <li style={{ marginBottom: '8px' }}> Secure user registration</li>
          <li style={{ marginBottom: '8px' }}> User authentication</li>
          <li style={{ marginBottom: '8px' }}> Password change functionality</li>
          <li style={{ marginBottom: '8px' }}> Password recovery via email</li>
          <li style={{ marginBottom: '8px' }}> User profile management</li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage; 
