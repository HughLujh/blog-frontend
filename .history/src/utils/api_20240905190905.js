import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your actual base API URL
  headers: {
    'Content-Type': 'application/json',
  },
});
