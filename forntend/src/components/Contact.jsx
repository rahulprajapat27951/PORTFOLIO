import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      setStatus("Server is not running.");
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-[#051937] px-5 py-24"
    >
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-[#A8EB12]">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Have a project or question? Send me a message and
            I will get back to you.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-800 bg-[#061f43] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.20)] sm:p-8"
        >

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-700 bg-[#051937] px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-[#A8EB12] focus:ring-1 focus:ring-[#A8EB12]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Your Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-700 bg-[#051937] px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-[#A8EB12] focus:ring-1 focus:ring-[#A8EB12]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Your Message
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-lg border border-slate-700 bg-[#051937] px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-[#A8EB12] focus:ring-1 focus:ring-[#A8EB12]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#A8EB12] py-3 font-bold text-[#051937] transition hover:scale-[1.02] hover:bg-[#baff3d]"
          >
            Send Message
          </button>

          {/* Status */}
          {status && (
            <p
              className={`text-center ${
                status.includes("successfully")
                  ? "text-[#A8EB12]"
                  : "text-slate-300"
              }`}
            >
              {status}
            </p>
          )}

        </form>
      </div>
    </section>
  );
}

export default Contact;