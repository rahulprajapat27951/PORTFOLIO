const Contact = require("../models/Message");


// ========================================
// CREATE CONTACT
// ========================================
const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: contact,
    });

  } catch (error) {
    console.error(
      "Create Contact Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// ========================================
// GET CONTACTS
// ========================================
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });

  } catch (error) {
    console.error(
      "Get Contacts Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// ========================================
// DELETE CONTACT
// ========================================
const deleteContact = async (req, res) => {
  try {
    const {
      id,
    } = req.params;

    const contact =
      await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });

  } catch (error) {
    console.error(
      "Delete Contact Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// ========================================
// EXPORTS
// ========================================
module.exports = {
  createContact,
  getContacts,
  deleteContact,
};