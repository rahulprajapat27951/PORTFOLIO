const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();


// ========================================
// DATABASE
// ========================================
connectDB();


// ========================================
// MIDDLEWARE
// ========================================
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://rahul-prajapat-admin-portfolio.vercel.app",
      "https://rahul-prajapat-portfolio.vercel.app"
    ],
    credentials: true,
  })
);

app.use(express.json());


// ========================================
// ROUTES
// ========================================
app.use(
  "/api/contact",
  contactRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);


// ========================================
// HOME
// ========================================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running...",
  });
});


// ========================================
// 404
// ========================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});


// ========================================
// SERVER
// ========================================
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});