
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaUser,
  FaSignOutAlt,
  FaGlobe,
  FaTimes,
  FaBars,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

import "./Sidebar.css";
import { FiAlertCircle, FiAtSign, FiUser } from "react-icons/fi";

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Messages",
      path: "/messages",
      icon: <FaEnvelope />,
    },
  
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  const logout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/login", { replace: true });
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`sidebar ${isOpen ? "sidebar-open" : ""}`}
      >
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-icon">
            <FiUser />
          </div>

          <div className="logo-content">
            <h1>
              Admin<span>Panel</span>
            </h1>
            <p>Portfolio Management</p>
          </div>

          <button
            className="sidebar-close-btn"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu Heading */}
        <p className="sidebar-section-title">
          MAIN MENU
        </p>

        {/* Navigation */}
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <span className="sidebar-icon">
                {item.icon}
              </span>

              <span className="sidebar-link-text">
                {item.name}
              </span>

              {item.name === "Messages" && (
                <span className="menu-badge">New</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="sidebar-bottom">
          <a
            href="http://localhost:5174"
            target="_blank"
            rel="noreferrer"
            className="sidebar-link website-link"
          >
            <span className="sidebar-icon">
              <FaGlobe />
            </span>

            <span className="sidebar-link-text">
              View Website
            </span>
          </a>

          <button
            onClick={logout}
            className="sidebar-link logout-button"
          >
            <span className="sidebar-icon">
              <FaSignOutAlt />
            </span>

            <span className="sidebar-link-text">
              Logout
            </span>
          </button>

          <div className="sidebar-footer">
            <span className="status-dot" />
            Admin Panel Online
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
