import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserShield,
  FaArrowRight,
} from "react-icons/fa";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://portfolio-0mb3.onrender.com/api/admin/register",
        {
          name: form.name.trim(),
          email: form.email.trim(),
          password: form.password,
        }
      );

      if (response.data.success) {
        setSuccess("Admin account created successfully!");

        setForm({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      console.error("Register Error:", error);

      setError(
        error.response?.data?.message ||
          "Unable to create admin account."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      {/* Background Glow */}
      <div className="register-bg-left"></div>
      <div className="register-bg-right"></div>
      <div className="register-bg-center"></div>

      {/* Main Container */}
      <div className="register-container">

        {/* Card */}
        <div className="register-card">

          {/* Top Accent */}
          <div className="register-top-line"></div>

          <div className="register-card-content">

            {/* Header */}
            <div className="register-header">

              <div className="register-logo">
                <FaUserShield />
              </div>

              <h1 className="register-title">
                Create <span>Admin</span>
              </h1>

              <p className="register-subtitle">
                Create your portfolio admin account
              </p>

            </div>

            {/* Error */}
            {error && (
              <div className="register-error">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="register-success">
                {success}
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="register-form"
            >

              {/* Name */}
              <div className="register-form-group">

                <label
                  htmlFor="name"
                  className="register-label"
                >
                  Full Name
                </label>

                <div className="register-input-wrapper">

                  <FaUser className="register-input-icon" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    disabled={loading}
                    className="register-input"
                  />

                </div>
              </div>

              {/* Email */}
              <div className="register-form-group">

                <label
                  htmlFor="email"
                  className="register-label"
                >
                  Email Address
                </label>

                <div className="register-input-wrapper">

                  <FaEnvelope className="register-input-icon" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="admin@gmail.com"
                    autoComplete="email"
                    required
                    disabled={loading}
                    className="register-input"
                  />

                </div>
              </div>

              {/* Password */}
              <div className="register-form-group">

                <label
                  htmlFor="password"
                  className="register-label"
                >
                  Password
                </label>

                <div className="register-input-wrapper">

                  <FaLock className="register-input-icon" />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Minimum 6 characters"
                    autoComplete="new-password"
                    required
                    disabled={loading}
                    className="register-input"
                  />

                </div>
              </div>

              {/* Confirm Password */}
              <div className="register-form-group">

                <label
                  htmlFor="confirmPassword"
                  className="register-label"
                >
                  Confirm Password
                </label>

                <div className="register-input-wrapper">

                  <FaLock className="register-input-icon" />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    required
                    disabled={loading}
                    className="register-input"
                  />

                </div>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="register-button"
              >
                {loading ? (
                  <>
                    <span className="register-spinner"></span>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <FaArrowRight />
                  </>
                )}
              </button>

            </form>

            {/* Login Link */}
            <div className="register-login">

              <p className="register-login-text">
                Already have an account?
              </p>

              <Link
                to="/login"
                className="register-login-link"
              >
                Login to Admin Panel
              </Link>

            </div>

          </div>
        </div>

        {/* Footer */}
        <p className="register-footer">
          © {new Date().getFullYear()} Portfolio Admin Panel
        </p>

      </div>
    </div>
  );
}

export default Register;