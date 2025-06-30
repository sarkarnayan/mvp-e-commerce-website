// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-url.com/api', // 🔁 Replace this with your actual backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Type for form data
export interface UserPayload {
  name: string;
  email: string;
  number: string;
  address: string;
}

// Function to create a new user entry
export const createUser = (data: UserPayload) => {
  return api.post('/users', data); // 🔁 Replace '/users' with your actual API endpoint
};

export default api;
