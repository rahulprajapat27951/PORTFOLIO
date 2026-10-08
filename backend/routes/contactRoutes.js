const express = require("express");

const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/contactController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// ========================================
// PUBLIC CONTACT FORM
// ========================================
router.post(
  "/",
  createContact
);


// ========================================
// ADMIN GET MESSAGES
// ========================================
router.get(
  "/",
  protect,
  getContacts
);


// ========================================
// ADMIN DELETE MESSAGE
// ========================================
router.delete(
  "/:id",
  protect,
  deleteContact
);


module.exports = router;