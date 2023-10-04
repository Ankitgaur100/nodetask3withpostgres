const { check, validationResult } = require("express-validator");

// Validation rules for signup
const validateSignup = [
  check("firstName").notEmpty().withMessage("First name is required"),
  check("lastName").notEmpty().withMessage("Last name is required"),
  check("email").isEmail().withMessage("Invalid email address"),
  check("phoneNumber")
    .optional()
    .isMobilePhone()
    .withMessage("Invalid phone number"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

// Custom error formatter function
const validationErrorFormatter = ({ location, msg, param }) => {
  return { location, message: msg, param };
};

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req).formatWith(validationErrorFormatter);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = {
  validateSignup,
  handleValidationErrors,
};
