const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Load environment variables
require("dotenv").config();

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api", require("./routes/Index")); // Use the index.js file for routing

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
