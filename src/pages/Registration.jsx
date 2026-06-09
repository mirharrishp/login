import axios from "axios";
import React, { useState } from "react";
import "./Registration.css";
import logoImg from "../assets/vite.svg";

function SignupPage({ onNavigate }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

    if (!form.name || !form.email || !form.phone || !form.password || !form.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8888/api/users/addUser.php",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          password: form.password,
        }
      );

      if (response.data && response.data.status === true) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          if (onNavigate) {
            onNavigate("login");
          }
        }, 1500);
      } else {
        setError(response.data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to server. Please try again later.");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="registration-logo">
          <img src={logoImg} alt="Logo" />
        </div>

        <h2>Join Us</h2>
        <p className="registration-subtitle">Create your account to get started</p>

        {error && <div className="alert-error">{error}</div>}
        {success && <div className="alert-success">{success}</div>}

        <form onSubmit={handleSubmit} className="registration-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="registration-input"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            className="registration-input"
            required
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="registration-input"
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            className="registration-input"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="registration-input"
            required
          />

          <button type="submit" className="registration-submit-btn">SIGN UP</button>
          <button
            type="button"
            className="registration-login-btn"
            onClick={() => onNavigate && onNavigate("login")}
          >
            Already a user? Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
