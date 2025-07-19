import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://authenticator-app-using-flask-restapi.onrender.com',
});

// Request functions
export const register = (data) => API.post('/register', data);
export const login = (data) => API.post('/login', data);
export const getMyDetails = (token) =>
  API.get('/my-details', { headers: { Authorization: `Bearer ${token}` } });

export const changePassword = (data, token) =>
  API.post('/change-password', data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const forgetPassword = (data) => API.post('/forget-password', data);

export const resetPassword = (data) => API.post('/reset-password', data);
