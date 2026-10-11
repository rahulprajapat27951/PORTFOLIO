
import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaEnvelope,
  FaProjectDiagram,
  FaUserShield,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "./Dashboard.css";

function Dashboard() {
  const [messageCount, setMessageCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(
    localStorage.getItem("adminUser") || "{}"
  );

  const fetchMessageCount = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await axios.get(
        "https://portfolio-0mb3.onrender.com/api/contact",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setMessageCount(response.data.count);
      }
    } catch (error) {
      console.error("Message Count Error:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessageCount();
  }, []);

  return (
    <div className="dashboard-page iris-reveal">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <main className="dashboard-content">

          {/* Welcome */}
          <div className="dashboard-welcome">

            <h1 className="dashboard-title">
              Welcome back,{" "}
              <span>
                {user.name || "Admin"}
              </span>
            </h1>

            <p className="dashboard-subtitle">
              Here's what's happening with your portfolio.
            </p>

          </div>

          {/* Stats */}
          <div className="dashboard-stats">

            {/* Messages */}
            <div className="dashboard-card">

              <div className="dashboard-card-top">

                <div>
                  <p className="dashboard-card-label">
                    Total Messages
                  </p>

                  <h2 className="dashboard-card-number">
                    {loading ? "..." : messageCount}
                  </h2>
                </div>

                <div className="dashboard-card-icon">
                  <FaEnvelope />
                </div>

              </div>

              <Link
                to="/messages"
                className="dashboard-card-link"
              >
                <span>View messages</span>
                <FaArrowRight />
              </Link>

            </div>

            {/* Projects */}
            <div className="dashboard-card">

              <div className="dashboard-card-top">

                <div>
                  <p className="dashboard-card-label">
                    Total Projects
                  </p>

                  <h2 className="dashboard-card-number">
                    3
                  </h2>
                </div>

                <div className="dashboard-card-icon">
                  <FaProjectDiagram />
                </div>

              </div>

              <p className="dashboard-card-description">
                Portfolio projects
              </p>

            </div>

            {/* Admin */}
            <div className="dashboard-card">

              <div className="dashboard-card-top">

                <div>
                  <p className="dashboard-card-label">
                    Account Role
                  </p>

                  <h2 className="dashboard-role">
                    {user.role || "Admin"}
                  </h2>
                </div>

                <div className="dashboard-card-icon">
                  <FaUserShield />
                </div>

              </div>

              <Link
                to="/profile"
                className="dashboard-card-link"
              >
                <span>View profile</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

          {/* Quick Actions */}
          <section className="dashboard-actions">

            <h2 className="dashboard-section-title">
              Quick Actions
            </h2>

            <div className="dashboard-action-grid">

              <Link
                to="/messages"
                className="dashboard-action-card"
              >
                <FaEnvelope className="dashboard-action-icon" />

                <h3>Check Messages</h3>

                <p>
                  View messages submitted through your
                  portfolio contact form.
                </p>
              </Link>

              <Link
                to="/profile"
                className="dashboard-action-card"
              >
                <FaUserShield className="dashboard-action-icon" />

                <h3>Admin Profile</h3>

                <p>
                  View your administrator account
                  information.
                </p>
              </Link>

            </div>

          </section>

        </main>

      </div>
    </div>
  );
}

export default Dashboard;
