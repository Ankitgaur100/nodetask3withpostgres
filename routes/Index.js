const express = require("express");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

const router = express.Router();

// Define your routes here
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
