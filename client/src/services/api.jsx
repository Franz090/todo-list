import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.warn("Unauthorized! Logging out...");
        localStorage.removeItem("token"); // Auto-logout kapag expired ang token
        window.location.href = "/login"; // Redirect to login page
      } else {
        console.error("API Error:", error.response.data.message || "Unknown error");
      }
    }
    return Promise.reject(error);
  }
);

export default api;
