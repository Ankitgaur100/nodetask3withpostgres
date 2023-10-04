const express = require("express");
const userController = require("../controller/userController");

const validationMiddleware = require("../middleware/validationMiddleware");

const router = express.Router();

router.post(
  "/signup",
  validationMiddleware.validateSignup,
  validationMiddleware.handleValidationErrors,
  userController.signup
);

module.exports = router;
