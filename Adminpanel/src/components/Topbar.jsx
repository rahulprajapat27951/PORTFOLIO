
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  FaBell,
  FaUserCircle,
  FaChevronDown,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaEnvelope,
  FaCheck,
} from "react-icons/fa";

import "./Topbar.css";

function Topbar() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("adminUser") || "{}"
      );
    } catch {
      return {};
    }
  });

  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] =
    useState(false);
  const [notifications, setNotifications] = useState([]);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const pageTitles = {
    "/dashboard": {
      title: "Dashboard",
      subtitle: "Overview of your portfolio",
    },
    "/messages": {
      title: "Messages",
      subtitle: "Manage your conversations",
    },
    "/profile": {
      title: "My Profile",
      subtitle: "Manage your account information",
    },
    "/analytics": {
      title: "Analytics",
      subtitle: "Track your portfolio performance",
    },
    "/settings": {
      title: "Settings",
      subtitle: "Manage your preferences",
    },
  };

  const currentPage = pageTitles[location.pathname] || {
    title: "Admin Dashboard",
    subtitle: "Manage your portfolio",
  };

  useEffect(() => {
    const updateUser = () => {
      try {
        setUser(
          JSON.parse(localStorage.getItem("adminUser") || "{}")
        );
      } catch {
        setUser({});
      }
    };

    window.addEventListener("storage", updateUser);

    return () => {
      window.removeEventListener("storage", updateUser);
    };
  }, []);

  useEffect(() => {
    const closeMenus = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenus);

    return () => {
      document.removeEventListener("mousedown", closeMenus);
    };
  }, []);

  const unreadCount = notifications.length;

  const markAllRead = () => {
    setNotifications([]);
  };

  const logout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmed) return;

    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/login", { replace: true });
  };

  const goTo = (path) => {
    setProfileOpen(false);
    setNotificationsOpen(false);
    navigate(path);
  };

  return (
    <header className="topbar">
      {/* Page Title */}
      <div className="topbar-title">
        <h2>{currentPage.title}</h2>
        <p>{currentPage.subtitle}</p>
      </div>

      {/* Right Section */}
      <div className="topbar-right">
        {/* Notifications */}
        <div className="topbar-dropdown-wrapper" ref={notificationRef}>
          <button
            className={`notification-btn ${
              notificationsOpen ? "dropdown-active" : ""
            }`}
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setProfileOpen(false);
            }}
            aria-label="Notifications"
            aria-expanded={notificationsOpen}
          >
            <FaBell />

            {unreadCount > 0 && (
              <span className="notification-count">
                {unreadCount}
              </span>
            )}
          </button>

          {notificationsOpen && (
            <div className="topbar-dropdown notification-dropdown">
              <div className="dropdown-heading">
                <div>
                  <h3>Notifications</h3>
                  <p>
                    {unreadCount > 0
                      ? `${unreadCount} unread notifications`
                      : "You're all caught up"}
                  </p>
                </div>

                {unreadCount > 0 && (
                  <button
                    className="mark-read-btn"
                    onClick={markAllRead}
                    title="Mark all as read"
                  >
                    <FaCheck />
                  </button>
                )}
              </div>

              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <button
                    className="notification-item"
                    key={notification.id}
                    onClick={() => goTo("/messages")}
                  >
                    <span className="notification-item-icon">
                      <FaEnvelope />
                    </span>

                    <span>
                      <strong>{notification.title}</strong>
                      <small>{notification.message}</small>
                    </span>
                  </button>
                ))
              ) : (
                <div className="notification-empty">
                  <FaBell />
                  <p>No new notifications</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="topbar-dropdown-wrapper" ref={profileRef}>
          <button
            className={`topbar-user ${
              profileOpen ? "dropdown-active" : ""
            }`}
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationsOpen(false);
            }}
            aria-expanded={profileOpen}
          >
            <FaUserCircle className="user-icon" />

            <span className="user-info">
              <span className="user-name">
                {user.name || "Admin"}
              </span>

              <span className="user-email">
                {user.email || "admin"}
              </span>
            </span>

            <FaChevronDown className="user-chevron" />
          </button>

          {profileOpen && (
            <div className="topbar-dropdown profile-dropdown">
              <div className="profile-dropdown-header">
                <FaUserCircle className="profile-avatar" />

                <div>
                  <h3>{user.name || "Admin"}</h3>
                  <p>{user.email || "admin"}</p>
                </div>
              </div>

              <div className="dropdown-divider" />

              <button
                className="dropdown-menu-item"
                onClick={() => goTo("/profile")}
              >
                <FaUser />
                <span>My Profile</span>
              </button>

              <button
                className="dropdown-menu-item"
                onClick={() => goTo("/settings")}
              >
                <FaCog />
                <span>Settings</span>
              </button>

              <div className="dropdown-divider" />

              <button
                className="dropdown-menu-item dropdown-logout"
                onClick={logout}
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Topbar;
