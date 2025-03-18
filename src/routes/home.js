const express = require("express");
const router = express.Router();
const homeTemplate = require("../views/templates/home");

router.get("/", (req, res) => {
  res.send(homeTemplate());
});

module.exports = router;
