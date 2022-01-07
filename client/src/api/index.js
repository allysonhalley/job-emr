import axios from 'axios';

const API = axios.create({ bseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    return req;
  });

// Occupations links
export const fetchOccupations = () => API.get('/occupations');

// Employees links
export const fetchEmployees = () => API.get('/employees');

// Home
export const fetchRoot = () => API.get('/')