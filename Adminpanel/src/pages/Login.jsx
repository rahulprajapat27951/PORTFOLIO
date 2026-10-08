
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

import {
  FaLock,
  FaEnvelope,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // =========================
  // HANDLE LOGIN
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // =========================
    // VALIDATION
    // =========================
    if (!form.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!form.password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      // =========================
      // LOGIN API
      // =========================
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email: form.email.trim(),
          password: form.password,
        }
      );

      // =========================
      // CHECK RESPONSE
      // =========================
      if (response.data.success) {
        // =========================
        // SAVE TOKEN
        // =========================
        localStorage.setItem(
          "adminToken",
          response.data.token
        );

        // =========================
        // SAVE ADMIN DATA
        // =========================
        localStorage.setItem(
          "adminUser",
          JSON.stringify(response.data.user)
        );

        // =========================
        // REDIRECT
        // =========================
        navigate("/dashboard", {
          replace: true,
        });
      } else {
        setError(
          response.data?.message ||
            "Invalid email or password."
        );
      }
    } catch (error) {
      console.error("Login Error:", error);

      setError(
        error.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* =========================
          BACKGROUND EFFECTS
      ========================= */}

      <div className="login-bg-left"></div>

      <div className="login-bg-right"></div>

      <div className="login-bg-center"></div>

      {/* =========================
          MAIN CONTAINER
      ========================= */}

      <div className="login-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="login-header">

          <div className="login-logo">
            <FaShieldAlt />
          </div>

          <h1 className="login-title">
            Admin <span>Panel</span>
          </h1>

          <p className="login-subtitle">
            Welcome back! Please login to continue.
          </p>

        </div>

        {/* =========================
            LOGIN CARD
        ========================= */}

        <div className="login-card">

          {/* Top Line */}
          <div className="login-top-line"></div>

          <div className="login-card-content">

            {/* =========================
                ERROR
            ========================= */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* =========================
                LOGIN FORM
            ========================= */}

            <form
              onSubmit={handleSubmit}
              className="login-form"
            >

              {/* =========================
                  EMAIL
              ========================= */}

              <div className="login-form-group">

                <label
                  htmlFor="email"
                  className="login-label"
                >
                  Email Address
                </label>

                <div className="login-input-wrapper">

                  <FaEnvelope className="login-input-icon" />

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
                    className="login-input"
                  />

                </div>

              </div>

              {/* =========================
                  PASSWORD
              ========================= */}

              <div className="login-form-group">

                <label
                  htmlFor="password"
                  className="login-label"
                >
                  Password
                </label>

                <div className="login-input-wrapper">

                  <FaLock className="login-input-icon" />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    disabled={loading}
                    className="login-input"
                  />

                </div>

              </div>

              {/* =========================
                  LOGIN BUTTON
              ========================= */}

              <button
                type="submit"
                disabled={loading}
                className="login-button"
              >

                {loading ? (
                  <>
                    <span className="login-spinner"></span>

                    <span>
                      Logging in...
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      Login
                    </span>

                    <FaArrowRight />
                  </>
                )}

              </button>

            </form>

            {/* =========================
                REGISTER
            ========================= */}

            <div className="login-register">

              <p className="login-register-text">
                Don't have an admin account?
              </p>

              <Link
                to="/register"
                className="login-register-link"
              >
                Create Admin Account
              </Link>

            </div>

          </div>

        </div>

        {/* =========================
            FOOTER
        ========================= */}

        <p className="login-footer">
          © {new Date().getFullYear()} Portfolio Admin Panel
        </p>

      </div>

    </div>
  );
}

export default Login;

