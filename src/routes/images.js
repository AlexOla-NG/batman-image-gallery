// src/routes/images.js
const express = require("express");
const router = express.Router();
const images = require("../data/images");
const imageTemplate = require("../views/templates/image");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!images[id]) {
    return res.status(404).send("Image not found");
  }

  res.send(imageTemplate(id, images[id]));
});

module.exports = router;
