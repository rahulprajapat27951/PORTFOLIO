
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Hide success popup after 4 seconds
  useEffect(() => {
    if (!showSuccess) return;

    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showSuccess]);

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");
    setShowSuccess(false);

    try {
      const response = await fetch(
        "https://portfolio-0mb3.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("");
        setShowSuccess(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setStatus("Server is not running. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-[#243B53] bg-[#071A2F] px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="font-medium text-[var(--theme-color)]">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#F1F5F9] sm:text-5xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#A8B7C8]">
            Have a project or question? Send me a message and
            I will get back to you.
          </p>
        </div>

        {/* Profile + Contact Form */}
        <div className="grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT: Profile Card */}
          <div className="rounded-2xl border border-[#243B53] bg-[#102A43] p-7 shadow-xl">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--theme-color)] text-3xl font-bold text-[#071A2F]">
              R
            </div>

            <h3 className="text-2xl font-bold text-white">
              Rahul Kumar
            </h3>

            <p className="mt-2 font-medium text-[var(--theme-color)]">
              Full Stack Developer
            </p>

            <p className="mt-4 text-sm leading-7 text-[#A8B7C8]">
              I build responsive and user-friendly websites using
              React, Tailwind CSS, Node.js, Express.js and MongoDB.
              I enjoy creating modern web applications and learning
              new technologies.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[#D5DFEA]">
              <p>
                <span className="text-[var(--theme-color)]">Frontend:</span>{" "}
                React, JavaScript, Tailwind CSS
              </p>

              <p>
                <span className="text-[var(--theme-color)]">Backend:</span>{" "}
                Node.js, Express.js, MongoDB
              </p>

              <p>
                <span className="text-[var(--theme-color)]">Open to:</span>{" "}
                Projects & Opportunities
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-5">
              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-2xl text-[#A8B7C8] transition duration-300 hover:scale-125 hover:text-[var(--theme-color)]"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-2xl text-[#A8B7C8] transition duration-300 hover:scale-125 hover:text-[var(--theme-color)]"
              >
                <FaLinkedin />
              </a>

              <FaCode className="text-2xl text-[var(--theme-color)]" />
            </div>
          </div>

          {/* RIGHT: Contact Form Container */}
          <div className="relative">

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-[#243B53] bg-[#102A43] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-[#D5DFEA]"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#334B63] bg-[#091D33] px-4 py-3 text-white placeholder-[#8193A8] outline-none transition duration-300 focus:border-[var(--theme-color)] focus:ring-1 focus:ring-[var(--theme-color)]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-[#D5DFEA]"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#334B63] bg-[#091D33] px-4 py-3 text-white placeholder-[#8193A8] outline-none transition duration-300 focus:border-[var(--theme-color)] focus:ring-1 focus:ring-[var(--theme-color)]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-[#D5DFEA]"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-lg border border-[#334B63] bg-[#091D33] px-4 py-3 text-white placeholder-[#8193A8] outline-none transition duration-300 focus:border-[var(--theme-color)] focus:ring-1 focus:ring-[var(--theme-color)]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "Sending..."}
                className="w-full rounded-lg bg-[var(--theme-color)] py-3 font-bold text-[#071A2F] transition duration-300 hover:scale-[1.02] hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "Sending..."
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {/* Error / Sending Status */}
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-center text-sm ${
                    status.includes("wrong") ||
                    status.includes("not running")
                      ? "text-[#FCA5A5]"
                      : "text-[#A8B7C8]"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>

            {/* CENTER: Success Animation Overlay */}
            {showSuccess && (
              <div
                role="status"
                aria-live="polite"
                className="success-overlay absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-[#071A2F]/90 p-6 backdrop-blur-sm"
              >
                <div className="success-popup w-full max-w-sm rounded-2xl border border-emerald-400/40 bg-[#102A43] p-8 text-center shadow-2xl">

                  {/* Animated Checkmark */}
                  <div className="success-check mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400 text-5xl font-bold text-[#071A2F]">
                    ✓
                  </div>

                  <h3 className="text-2xl font-bold text-emerald-300">
                    Message Sent!
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#A8B7C8]">
                    Thank you for contacting me. I'll get back
                    to you soon.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
