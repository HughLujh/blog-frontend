import axios from 'axios';

// Create an axios instance
export const api = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your actual base API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can export additional API methods or functions here if needed
