const express = require("express");
const authController = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", authController.login);
router.get("/profile", authMiddleware.verifyToken, authController.profile);

module.exports = router;
