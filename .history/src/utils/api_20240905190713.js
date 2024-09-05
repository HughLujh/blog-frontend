import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your actual base API URL
  headers: {
    'Content-Type': 'application/json',
  },
});
