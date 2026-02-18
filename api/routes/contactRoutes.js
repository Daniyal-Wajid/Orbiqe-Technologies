const express = require("express");
const router = express.Router();
const { submitContact } = require("../controllers/contactController");
const auth = require("../middleware/authMiddleware");

router.post("/", submitContact); // Public route

module.exports = router;
