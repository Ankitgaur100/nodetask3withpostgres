const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Handle user login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token for authentication
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", // Token expires in 1 hour
      }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
};

// Retrieve user profile
const profile = (req, res) => {
  // The user information is available in req.user due to the authentication middleware
  const { userId, email } = req.user;
  res.json({ userId, email });
};

module.exports = {
  login,
  profile,
};
