const User = require("../Models/User");

// Handle user registration
const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    // Create user in the database
    const user = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    });

    // Send verification email here (nodemailer)

    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
};

module.exports = {
  signup,
};
