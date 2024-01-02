// http-client.ts file
import axios from "axios";

const VITE_API_URL = process.env.VITE_API_URL || 'http://localhost:8080/api';

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

export default axiosInstance;
