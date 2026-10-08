import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaUser,
  FaSignOutAlt,
  FaGlobe,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/login");
  };

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
  ];

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <h1>
          Admin<span>Panel</span>
        </h1>

        <p>Portfolio Management</p>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="sidebar-bottom">

        <a
          href="http://localhost:5173"
          target="_blank"
          rel="noreferrer"
          className="sidebar-link website-link"
        >
          <span className="sidebar-icon">
            <FaGlobe />
          </span>

          <span>View Website</span>
        </a>

        <button
          onClick={logout}
          className="sidebar-link logout-button"
        >
          <span className="sidebar-icon">
            <FaSignOutAlt />
          </span>

          <span>Logout</span>
        </button>

      </div>
    </aside>
  );
}

export default Sidebar;