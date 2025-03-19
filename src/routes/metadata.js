// src/routes/metadata.js
const express = require("express");
const router = express.Router();
const axios = require("axios");

const metadataTemplate = require("../views/templates/metadata");
const images = require("../data/images");
const seperateText = require("../utils/helper");

async function getMetadata(bucket, object) {
  try {
    const response = await axios.get(
      `https://storage.googleapis.com/storage/v1/b/${bucket}/o/${object}`
    );
    return response?.data;
  } catch (error) {
    console.error(error);
  }
}

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!images[id]) {
    return res.status(404).send("Image not found");
  }

  const imageUrl = seperateText(images[id].src, "/");
  const bucket = imageUrl[imageUrl.length - 2];
  const imageName = imageUrl[imageUrl.length - 1];

  const imageMetadata = await getMetadata(bucket, imageName);

  // Generate current request time
  const requestTime = new Date().toISOString();

  // Format and send response
  res.json(metadataTemplate(imageMetadata, requestTime));
});

module.exports = router;
