import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaEnvelope,
  FaTrash,
  FaSync,
  FaUser,
  FaCalendarAlt,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "./Messages.css";

function Messages() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================================
  // FETCH MESSAGES
  // ================================
  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/login", {
          replace: true,
        });

        return;
      }

      const response = await axios.get(
        "https://portfolio-0mb3.onrender.com/api/contact",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Messages API Response:", response.data);

      if (response.data.success) {
        setMessages(response.data.data || []);
      } else {
        setMessages([]);

        setError(
          response.data.message ||
            "Unable to load messages."
        );
      }
    } catch (error) {
      console.error(
        "Fetch Messages Error:",
        error
      );

      // Unauthorized
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/login", {
          replace: true,
        });

        return;
      }

      // Not Found
      if (error.response?.status === 404) {
        setError(
          "Messages API not found. Please check your backend server and /api/contact route."
        );

        return;
      }

      // Server Error
      if (error.response?.status >= 500) {
        setError(
          "Backend server error. Please check your backend console."
        );

        return;
      }

      setError(
        error.response?.data?.message ||
          "Unable to load messages."
      );
    } finally {
      setLoading(false);
    }
  };


  // ================================
  // DELETE MESSAGE
  // ================================
  const deleteMessage = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/login", {
          replace: true,
        });

        return;
      }

      await axios.delete(
        `http://localhost:5000/api/contact/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages((previousMessages) =>
        previousMessages.filter(
          (message) => message._id !== id
        )
      );

    } catch (error) {
      console.error(
        "Delete Message Error:",
        error
      );

      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/login", {
          replace: true,
        });

        return;
      }

      alert(
        error.response?.data?.message ||
          "Unable to delete message."
      );
    }
  };


  // ================================
  // LOAD ON PAGE OPEN
  // ================================
  useEffect(() => {
    fetchMessages();
  }, []);


  return (
    <div className="messages-page">

      {/* Sidebar */}
      <Sidebar />


      {/* Main Area */}
      <div className="messages-main">

        {/* Topbar */}
        <Topbar />


        {/* Content */}
        <main className="messages-content">

          {/* ================================
              HEADER
          ================================= */}
          <div className="messages-header">

            <div className="messages-heading">

              <h1 className="messages-title">
                Messages
              </h1>

              <p className="messages-subtitle">
                Messages received from your portfolio.
              </p>

            </div>


            {/* Refresh */}
            <button
              type="button"
              onClick={fetchMessages}
              disabled={loading}
              className="messages-refresh-button"
            >

              <FaSync
                className={
                  loading
                    ? "messages-refresh-icon spinning"
                    : "messages-refresh-icon"
                }
              />

              <span>
                {loading
                  ? "Loading..."
                  : "Refresh"}
              </span>

            </button>

          </div>


          {/* ================================
              ERROR
          ================================= */}
          {error && (
            <div className="messages-error">

              <p className="messages-error-title">
                Error
              </p>

              <p className="messages-error-text">
                {error}
              </p>

            </div>
          )}


          {/* ================================
              LOADING
          ================================= */}
          {loading ? (

            <div className="messages-state-card">

              <div className="messages-spinner"></div>

              <p>
                Loading messages...
              </p>

            </div>


          ) : messages.length === 0 ? (

            /* ================================
               EMPTY
            ================================= */

            <div className="messages-state-card messages-empty">

              <div className="messages-empty-icon-wrapper">

                <FaEnvelope className="messages-empty-icon" />

              </div>

              <h2>
                No Messages
              </h2>

              <p>
                You haven't received any contact
                messages yet.
              </p>

            </div>


          ) : (

            /* ================================
               MESSAGES
            ================================= */

            <div className="messages-list">

              {/* Message Count */}
              <div className="messages-count">

                <FaEnvelope className="messages-count-icon" />

                <span>
                  Total Messages:
                </span>

                <span className="messages-count-number">
                  {messages.length}
                </span>

              </div>


              {/* Message Cards */}
              {messages.map((message) => (

                <div
                  key={message._id}
                  className="message-card"
                >

                  <div className="message-card-content">

                    {/* Message Content */}
                    <div className="message-content">


                      {/* User */}
                      <div className="message-user">

                        <div className="message-avatar">
                          <FaUser />
                        </div>


                        <div className="message-user-info">

                          <h2>
                            {message.name || "Unknown User"}
                          </h2>

                          <p>
                            {message.email || "No email"}
                          </p>

                        </div>

                      </div>


                      {/* Message */}
                      <div className="message-text-box">

                        <p>
                          {message.message ||
                            "No message available."}
                        </p>

                      </div>


                      {/* Date */}
                      <div className="message-date">

                        <FaCalendarAlt />

                        <span>
                          {message.createdAt
                            ? new Date(
                                message.createdAt
                              ).toLocaleString()
                            : "Date unavailable"}
                        </span>

                      </div>

                    </div>


                    {/* Delete */}
                    <div className="message-actions">

                      <button
                        type="button"
                        onClick={() =>
                          deleteMessage(
                            message._id
                          )
                        }
                        className="message-delete-button"
                      >

                        <FaTrash />

                        <span>
                          Delete
                        </span>

                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default Messages;