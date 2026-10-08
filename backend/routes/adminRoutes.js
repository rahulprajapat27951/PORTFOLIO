const express = require("express");

const {
  registerAdmin,
  loginAdmin,
  changePassword,
} = require("../controllers/adminController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Login
router.post("/login", loginAdmin);

// Register
router.post("/register", registerAdmin);

// Change Password
router.put(
  "/change-password",
  protect,
  changePassword
);

module.exports = router;