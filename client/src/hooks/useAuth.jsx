import { useState, useEffect } from "react";
import api from "../services/api";

const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fetch user data for Dashboard
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Unauthorized! Please log in.");
  
        setLoading(true);
        const response = await api.get("/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        console.log("Dashboard API Response:", response.data); // Debugging line
        setUser(response.data.user);
      } catch (err) {
        console.error("Error fetching user:", err.response?.data || err.message); // Debugging line
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUser();
  }, []);
  

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/dashboard"; // Redirect to dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

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
      await api.post("/register", { firstName, lastName, email, password });
      setEmail(""); setPassword(""); setFirstName(""); setLastName(""); setConfirmPassword("");
      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return {
    email, setEmail, password, setPassword, firstName, setFirstName,
    lastName, setLastName, confirmPassword, setConfirmPassword, error, loading, user,
    handleLoginSubmit, handleRegisterSubmit
  };
};

export default useAuth;
