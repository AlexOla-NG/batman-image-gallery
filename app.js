const express = require("express");
const app = express();

// Import routes
const homeRoutes = require("./src/routes/home");
const imageRoutes = require("./src/routes/images");
const metadataRoutes = require("./src/routes/metadata");

// Register routes
app.use("/", homeRoutes);
app.use("/images", imageRoutes);
app.use("/meta", metadataRoutes);

// 404 handler for any other routes
app.use((req, res) => {
  res.status(404).send("Page not found");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the home page`);
});
