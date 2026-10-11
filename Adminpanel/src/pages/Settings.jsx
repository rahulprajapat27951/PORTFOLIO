
import { useState } from "react";
import {
  FiUser,
  FiLock,
  FiBell,
  FiMonitor,
  FiSave,
  FiEye,
  FiEyeOff,
  FiCheckCircle,
} from "react-icons/fi";
import "./Settings.css";

// Safely read JSON data from localStorage
const readStorage = (key, fallback = null) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

// Read logged-in admin details from your existing storage
const getStoredAdmin = () => {
  const adminUser = readStorage("adminUser");
  const adminData = readStorage("adminData");

  const stored =
    (adminUser && typeof adminUser === "object" ? adminUser : null) ||
    (adminData && typeof adminData === "object" ? adminData : null) ||
    {};

  // Supports APIs that return { user: {...} } or { admin: {...} }
  const user = stored.user || stored.admin || stored;

  return {
    source: adminUser ? "adminUser" : adminData ? "adminData" : "adminUser",
    raw: stored,
    user,
  };
};

const getInitialProfile = () => {
  const { user } = getStoredAdmin();

  return {
    name: user.fullName || user.name || user.username || "",
    email: user.email || user.emailAddress || "",
    phone:
      user.phone ||
      user.phoneNumber ||
      user.mobile ||
      user.mobileNumber ||
      "",
    role: user.role || user.userRole || "Administrator",
  };
};

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState(getInitialProfile);

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notifications, setNotifications] = useState(
    () =>
      readStorage("adminNotifications", {
        emailNotifications: true,
        newMessages: true,
        securityAlerts: true,
        weeklyReports: false,
      })
  );

  const [appearance, setAppearance] = useState(
    () =>
      readStorage("adminAppearance", {
        compactMode: false,
        animations: true,
      })
  );

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSecurityChange = (e) => {
    const { name, value } = e.target;

    setSecurity((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    try {
      if (activeTab === "profile") {
        const { source, raw, user } = getStoredAdmin();

        // Preserve existing fields such as _id and other admin data.
        const updatedUser = {
          ...user,
          name: profile.name.trim(),
          email: profile.email.trim(),
          phone: profile.phone.trim(),
        };

        // Keep the existing data structure where possible.
        const updatedStored =
          raw.user
            ? { ...raw, user: updatedUser }
            : raw.admin
              ? { ...raw, admin: updatedUser }
              : { ...raw, ...updatedUser };

        // Do not save an invented profile if there is no logged-in user.
        if (
          !localStorage.getItem("adminUser") &&
          !localStorage.getItem("adminData")
        ) {
          alert("Admin details not found. Please log in again.");
          return;
        }

        localStorage.setItem(source, JSON.stringify(updatedStored));
      }

      if (activeTab === "notifications") {
        localStorage.setItem(
          "adminNotifications",
          JSON.stringify(notifications)
        );
      }

      if (activeTab === "appearance") {
        localStorage.setItem(
          "adminAppearance",
          JSON.stringify(appearance)
        );
      }

      if (activeTab === "security") {
        if (
          !security.currentPassword ||
          !security.newPassword ||
          !security.confirmPassword
        ) {
          alert("Please fill in all password fields.");
          return;
        }

        if (security.newPassword !== security.confirmPassword) {
          alert("New password and confirm password do not match.");
          return;
        }

        alert(
          "Password change requires your backend API. No password was changed."
        );
        return;
      }

      setSaved(true);
    } catch (error) {
      console.error("Settings save error:", error);
      alert("Unable to save settings. Please try again.");
    }
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: <FiUser /> },
    { id: "security", label: "Security", icon: <FiLock /> },
    { id: "notifications", label: "Notifications", icon: <FiBell /> },
    { id: "appearance", label: "Appearance", icon: <FiMonitor /> },
  ];

  return (
    <div className="settings-page">
      <div className="settings-header">
        <div>
          <p className="settings-eyebrow">PREFERENCES</p>
          <h1>Settings</h1>
          <p className="settings-subtitle">
            Manage your account, security and dashboard preferences.
          </p>
        </div>
      </div>

      <div className="settings-layout">
        <aside className="settings-sidebar">
          <p className="settings-nav-title">GENERAL SETTINGS</p>

          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`settings-tab ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                setSaved(false);
              }}
            >
              <span className="settings-tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </aside>

        <form className="settings-content" onSubmit={handleSave}>
          {/* PROFILE */}
          {activeTab === "profile" && (
            <section>
              <div className="settings-section-heading">
                <div className="settings-heading-icon">
                  <FiUser />
                </div>
                <div>
                  <h2>Profile Settings</h2>
                  <p>Your logged-in administrator details.</p>
                </div>
              </div>

              <div className="settings-avatar">
                <div className="settings-avatar-circle">
                  {profile.name.trim()
                    ? profile.name.trim().charAt(0).toUpperCase()
                    : "A"}
                </div>

                <div>
                  <h3>{profile.name || "Admin Name Not Found"}</h3>
                  <p>{profile.role}</p>
                  <span className="settings-account-label">
                    Administrator Account
                  </span>
                </div>
              </div>

              {!profile.name && !profile.email && (
                <div className="settings-info">
                  Admin details could not be found in localStorage. Check
                  whether your login code stores the user in
                  <strong> adminUser </strong>
                  or <strong> adminData </strong>.
                </div>
              )}

              <div className="settings-form-grid">
                <div className="settings-field">
                  <label htmlFor="admin-name">Full Name</label>
                  <input
                    id="admin-name"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="settings-field">
                  <label htmlFor="admin-email">Email Address</label>
                  <input
                    id="admin-email"
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    placeholder="admin@example.com"
                    required
                  />
                </div>

                <div className="settings-field">
                  <label htmlFor="admin-phone">Phone Number</label>
                  <input
                    id="admin-phone"
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleProfileChange}
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="settings-field">
                  <label htmlFor="admin-role">Account Role</label>
                  <input
                    id="admin-role"
                    name="role"
                    value={profile.role}
                    readOnly
                  />
                </div>
              </div>
            </section>
          )}

          {/* SECURITY */}
          {activeTab === "security" && (
            <section>
              <div className="settings-section-heading">
                <div className="settings-heading-icon">
                  <FiLock />
                </div>
                <div>
                  <h2>Security</h2>
                  <p>Manage your account password.</p>
                </div>
              </div>

              <div className="settings-field settings-password-field">
                <label htmlFor="current-password">Current Password</label>
                <input
                  id="current-password"
                  type="password"
                  name="currentPassword"
                  value={security.currentPassword}
                  onChange={handleSecurityChange}
                  placeholder="Enter current password"
                  autoComplete="current-password"
                />
              </div>

              <div className="settings-field settings-password-field">
                <label htmlFor="new-password">New Password</label>
                <div className="settings-password-wrap">
                  <input
                    id="new-password"
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    value={security.newPassword}
                    onChange={handleSecurityChange}
                    placeholder="Enter new password"
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="settings-eye-button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className="settings-field settings-password-field">
                <label htmlFor="confirm-password">
                  Confirm New Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  name="confirmPassword"
                  value={security.confirmPassword}
                  onChange={handleSecurityChange}
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                />
              </div>

              <div className="settings-info">
                Actual password changes must be verified and saved through
                your backend API. This form does not change your password yet.
              </div>
            </section>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <section>
              <div className="settings-section-heading">
                <div className="settings-heading-icon">
                  <FiBell />
                </div>
                <div>
                  <h2>Notifications</h2>
                  <p>Choose your notification preferences.</p>
                </div>
              </div>

              {[
                {
                  key: "emailNotifications",
                  title: "Email Notifications",
                  desc: "Receive important updates by email.",
                },
                {
                  key: "newMessages",
                  title: "New Messages",
                  desc: "Get notified about new contact messages.",
                },
                {
                  key: "securityAlerts",
                  title: "Security Alerts",
                  desc: "Receive important account security alerts.",
                },
                {
                  key: "weeklyReports",
                  title: "Weekly Reports",
                  desc: "Enable weekly dashboard summaries.",
                },
              ].map((item) => (
                <div className="settings-toggle-row" key={item.key}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>

                  <label className="settings-switch">
                    <input
                      type="checkbox"
                      checked={Boolean(notifications[item.key])}
                      onChange={(e) => {
                        setNotifications((prev) => ({
                          ...prev,
                          [item.key]: e.target.checked,
                        }));
                        setSaved(false);
                      }}
                    />
                    <span className="settings-switch-slider" />
                  </label>
                </div>
              ))}
            </section>
          )}

          {/* APPEARANCE */}
          {activeTab === "appearance" && (
            <section>
              <div className="settings-section-heading">
                <div className="settings-heading-icon">
                  <FiMonitor />
                </div>
                <div>
                  <h2>Appearance</h2>
                  <p>Customize your dashboard preferences.</p>
                </div>
              </div>

              <div className="settings-preview">
                <div className="settings-preview-top">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="settings-preview-body">
                  <div className="settings-preview-sidebar" />
                  <div className="settings-preview-main">
                    <div />
                    <div />
                    <div />
                  </div>
                </div>

                <p>Dark Dashboard Preview</p>
              </div>

              <div className="settings-toggle-row">
                <div>
                  <h3>Compact Mode</h3>
                  <p>Use a more compact dashboard layout.</p>
                </div>

                <label className="settings-switch">
                  <input
                    type="checkbox"
                    checked={Boolean(appearance.compactMode)}
                    onChange={(e) => {
                      setAppearance((prev) => ({
                        ...prev,
                        compactMode: e.target.checked,
                      }));
                      setSaved(false);
                    }}
                  />
                  <span className="settings-switch-slider" />
                </label>
              </div>

              <div className="settings-toggle-row">
                <div>
                  <h3>Interface Animations</h3>
                  <p>Enable subtle interface transitions.</p>
                </div>

                <label className="settings-switch">
                  <input
                    type="checkbox"
                    checked={Boolean(appearance.animations)}
                    onChange={(e) => {
                      setAppearance((prev) => ({
                        ...prev,
                        animations: e.target.checked,
                      }));
                      setSaved(false);
                    }}
                  />
                  <span className="settings-switch-slider" />
                </label>
              </div>
            </section>
          )}

          <div className="settings-footer">
            <span className="settings-save-status" role="status">
              {saved && (
                <>
                  <FiCheckCircle /> Changes saved successfully
                </>
              )}
            </span>

            <button type="submit" className="settings-save-button">
              <FiSave />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
