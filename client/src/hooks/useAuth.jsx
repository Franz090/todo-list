import { useState } from "react";
import axios from "axios"; 
import api from "../services/api"; 

const API_URL = import.meta.env.VITE_API_URL;


const useAuth = () => {
  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Para sa loading state
  const [error, setError] = useState("");

  // Register State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Login Handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const response = await api.post("/login", { email, password }); // Gumamit ng `api`
      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Login failed!");
      setLoading(false);
    }
  };
  

  // Register Handler
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await api.post("/register", { 
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
  
      console.log("Registration successful:", response.data);
      setError("Registration successful! Please login.");
      setLoading(false);
    } catch (error) {
      console.error("Registration failed:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Registration failed!");
      setLoading(false);
    }
  };
  
  return {
    email, setEmail,
    password, setPassword,
    firstName, setFirstName,
    lastName, setLastName,
    confirmPassword, setConfirmPassword,
    error, setError,
    loading,
    handleLoginSubmit,
    handleRegisterSubmit,
  };
};

export default useAuth;
