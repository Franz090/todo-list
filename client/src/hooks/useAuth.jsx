import { useState } from "react";

const useAuth = () => {
  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Login Handler
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
    // Add API call for login here
  };

  // Register Handler
  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("Registering:", { firstName, lastName, email, password });
    // Add API call for registration here
  };

  return {
    email, setEmail,
    password, setPassword,
    firstName, setFirstName,
    lastName, setLastName,
    confirmPassword, setConfirmPassword,
    error, setError,
    handleLoginSubmit,
    handleRegisterSubmit,
  };
};

export default useAuth;
