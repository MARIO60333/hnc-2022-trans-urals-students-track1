const express = require("express");
const router = express.Router();
const path = require("path");

router.use(function timeLog(req, res, next) {
  console.log("Time ROOT: ", Date.now());
  next();
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

module.exports = router;
