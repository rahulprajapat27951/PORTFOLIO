import { FaBell, FaUserCircle } from "react-icons/fa";

import "./Topbar.css";

function Topbar() {
  const user = JSON.parse(
    localStorage.getItem("adminUser") || "{}"
  );

  return (
    <header className="topbar">

      {/* Page title */}
      <div className="topbar-title">
        <h2>Admin Dashboard</h2>

        <p>Manage your portfolio</p>
      </div>

      {/* Right Section */}
      <div className="topbar-right">

        {/* Notification */}
        <button className="notification-btn">
          <FaBell />

          <span className="notification-dot"></span>
        </button>

        {/* User */}
        <div className="topbar-user">

          <FaUserCircle className="user-icon" />

          <div className="user-info">
            <p className="user-name">
              {user.name || "Admin"}
            </p>

            <p className="user-email">
              {user.email || "admin"}
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;