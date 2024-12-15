require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require("./config/db"); // Initialize DB connection

const app = express();

// Routes
// app.use("api/posts", postRoutes);
// app.use("api/comments", commentRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
