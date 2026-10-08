import { useState } from "react";
import axios from "axios";

import {
  FaUserCircle,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "./Profile.css";

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("adminUser") || "{}"
  );

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!form.currentPassword) {
      setError("Please enter your current password.");
      return;
    }

    if (!form.newPassword) {
      setError("Please enter a new password.");
      return;
    }

    if (form.newPassword.length < 6) {
      setError(
        "New password must be at least 6 characters."
      );
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const token =
        localStorage.getItem("adminToken");

      const response = await axios.put(
        "http://localhost:5000/api/admin/change-password",
        {
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setMessage(
          "Password changed successfully!"
        );

        setForm({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error(
        "Change Password Error:",
        error
      );

      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        window.location.href = "/login";
        return;
      }

      setError(
        error.response?.data?.message ||
          "Unable to change password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-page">

      <Sidebar />

      <div className="profile-main">

        <Topbar />

        <main className="profile-content">

          {/* Header */}
          <div className="profile-header">

            <h1 className="profile-title">
              Admin Profile
            </h1>

            <p className="profile-subtitle">
              Manage your account and password.
            </p>

          </div>


          {/* Main Grid */}
          <div className="profile-grid">

            {/* Profile Information */}
            <div className="profile-card">

              <div className="profile-user-header">

                <FaUserCircle className="profile-user-icon" />

                <div>
                  <h2 className="profile-user-name">
                    {user.name || "Admin"}
                  </h2>

                  <p className="profile-user-role">
                    Administrator
                  </p>
                </div>

              </div>


              <div className="profile-info-list">

                {/* Name */}
                <div className="profile-info-item">

                  <p className="profile-info-label">
                    Name
                  </p>

                  <div className="profile-info-value">
                    {user.name || "Not available"}
                  </div>

                </div>


                {/* Email */}
                <div className="profile-info-item">

                  <p className="profile-info-label">
                    Email
                  </p>

                  <div className="profile-info-value">
                    {user.email || "Not available"}
                  </div>

                </div>


                {/* Role */}
                <div className="profile-info-item">

                  <p className="profile-info-label">
                    Role
                  </p>

                  <div className="profile-info-value profile-role-value">
                    {user.role || "admin"}
                  </div>

                </div>

              </div>

            </div>


            {/* Change Password */}
            <div className="profile-card">

              <div className="password-header">

                <div className="password-icon">
                  <FaLock />
                </div>

                <div>
                  <h2 className="password-title">
                    Change Password
                  </h2>

                  <p className="password-subtitle">
                    Update your login password.
                  </p>
                </div>

              </div>


              {/* Success */}
              {message && (
                <div className="profile-success">
                  <FaCheckCircle />
                  <span>{message}</span>
                </div>
              )}


              {/* Error */}
              {error && (
                <div className="profile-error">
                  {error}
                </div>
              )}


              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="password-form"
              >

                {/* Current Password */}
                <div className="password-form-group">

                  <label
                    htmlFor="currentPassword"
                    className="password-label"
                  >
                    Current Password
                  </label>

                  <input
                    id="currentPassword"
                    type="password"
                    name="currentPassword"
                    value={form.currentPassword}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    placeholder="Enter current password"
                    autoComplete="current-password"
                    className="password-input"
                  />

                </div>


                {/* New Password */}
                <div className="password-form-group">

                  <label
                    htmlFor="newPassword"
                    className="password-label"
                  >
                    New Password
                  </label>

                  <input
                    id="newPassword"
                    type="password"
                    name="newPassword"
                    value={form.newPassword}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    placeholder="Enter new password"
                    autoComplete="new-password"
                    className="password-input"
                  />

                </div>


                {/* Confirm Password */}
                <div className="password-form-group">

                  <label
                    htmlFor="confirmPassword"
                    className="password-label"
                  >
                    Confirm New Password
                  </label>

                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    placeholder="Confirm new password"
                    autoComplete="new-password"
                    className="password-input"
                  />

                </div>


                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="password-button"
                >
                  {loading
                    ? "Updating..."
                    : "Change Password"}
                </button>

              </form>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Profile;