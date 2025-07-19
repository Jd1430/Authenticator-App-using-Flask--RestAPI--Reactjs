import React, { useEffect, useState } from 'react';
import { getMyDetails } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom';

const MyDetailsPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No authentication token found. Please login.');
      setLoading(false);
      return;
    }

    getMyDetails(token)
      .then((res) => {
        // Handle both possible response structures
        const userData = res.data.user || res.data;
        setUser(userData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching user details:', err);
        if (err.response?.status === 401) {
          setError('Session expired. Please login again.');
          localStorage.removeItem('token');
          setTimeout(() => navigate('/login'), 2000);
        } else {
          setError('Failed to load user details. Please try again.');
        }
        setLoading(false);
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#666'
      }}>
        Loading your profile...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        maxWidth: '400px', 
        margin: '50px auto', 
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#f8d7da', 
          color: '#721c24', 
          borderRadius: '4px',
          border: '1px solid #f5c6cb',
          marginBottom: '20px'
        }}>
          {error}
        </div>
        <Link to="/login" style={{ 
          color: '#007bff', 
          textDecoration: 'none',
          fontSize: '16px'
        }}>
          Go to Login
        </Link>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ 
        maxWidth: '400px', 
        margin: '50px auto', 
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#f8d7da', 
          color: '#721c24', 
          borderRadius: '4px',
          border: '1px solid #f5c6cb'
        }}>
          No user data found.
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '50px auto', 
      padding: '30px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #dee2e6',
        paddingBottom: '15px'
      }}>
        <h2 style={{ color: '#333', margin: 0 }}>My Profile</h2>
        <button
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Logout
        </button>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        padding: '25px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            fontWeight: 'bold', 
            color: '#555', 
            marginBottom: '5px',
            fontSize: '14px'
          }}>
            Full Name
          </label>
          <div style={{ 
            padding: '12px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '4px',
            border: '1px solid #dee2e6',
            fontSize: '16px',
            color: '#333'
          }}>
            {user.name}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            fontWeight: 'bold', 
            color: '#555', 
            marginBottom: '5px',
            fontSize: '14px'
          }}>
            Email Address
          </label>
          <div style={{ 
            padding: '12px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '4px',
            border: '1px solid #dee2e6',
            fontSize: '16px',
            color: '#333'
          }}>
            {user.email}
          </div>
        </div>

        {user.created_at && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              fontWeight: 'bold', 
              color: '#555', 
              marginBottom: '5px',
              fontSize: '14px'
            }}>
              Member Since
            </label>
            <div style={{ 
              padding: '12px', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '4px',
              border: '1px solid #dee2e6',
              fontSize: '16px',
              color: '#333'
            }}>
              {new Date(user.created_at).toLocaleDateString()}
            </div>
          </div>
        )}
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Link to="/change-password" style={{
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          transition: 'background-color 0.3s'
        }}>
          Change Password
        </Link>
        
        <Link to="/" style={{
          padding: '12px 24px',
          backgroundColor: '#6c757d',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          transition: 'background-color 0.3s'
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MyDetailsPage;
