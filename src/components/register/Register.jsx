import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigateTo = useNavigate();

  const handleCloseForm = () => {
    setIsFormVisible(false);
    navigateTo("/");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setIsRegistered(true);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    setTimeout(() => {
      setIsRegistered(false);
    }, 2000);
  };

  return (
    <>
      {isFormVisible && (
        <div className="register-page">
          <button className="close-button" onClick={handleCloseForm}>
            ×
          </button>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
      {isRegistered && (
        <div className="success-message">
          Registered successfully! You can now log in.
        </div>
      )}
    </>
  );
};

export default Register;
