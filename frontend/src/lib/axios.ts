import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000, // Set a timeout of 5 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
