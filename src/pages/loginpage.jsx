import React, { useState } from 'react';
import axios from 'axios';
import './loginpage.css';
import emailIcon from '../assets/email.png';
import passIcon from '../assets/passic.png';
import logoImg from '../assets/vite.svg';

const LoginPage = ({ onNavigate }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:8888/api/users/login.php",
        form
      );

      if (response.data && response.data.status === true) {
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          if (onNavigate) {
            onNavigate("form");
          }
        }, 1200);
      } else {
        setError(response.data.message || "Invalid email or password.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to server. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <img src={logoImg} alt="Logo" />
        </div>

        <h2>Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue to your account</p>

        {error && <div className="alert-error">{error}</div>}
        {success && <div className="alert-success">{success}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-input-group">
            <img src={emailIcon} alt="Email" className="login-input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="login-input"
              required
            />
          </div>

          <div className="login-input-group">
            <img src={passIcon} alt="Password" className="login-input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="login-input"
              required
            />
          </div>

          <div className="login-options">
            <label className="login-remember">
              <input type="checkbox" /> Remember me
            </label>
            <span className="login-forgot">Forgot password?</span>
          </div>

          <button type="submit" className="login-submit-btn">LOGIN</button>
          
          <button
            type="button"
            className="login-register-btn"
            onClick={() => onNavigate && onNavigate("signup")}
          >
            Don't have an account? Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;