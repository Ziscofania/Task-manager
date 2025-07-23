const express = require("express");
const router = express.Router();

const authController = require("../controllers/authcontroller");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/profile", authMiddleware, authController.getProfile);

module.exports = router;
