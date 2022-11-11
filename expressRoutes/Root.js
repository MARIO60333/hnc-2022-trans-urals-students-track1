const express = require("express");
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time ROOT: ", Date.now());
  next();
});

router.get("/", function (req, res) {
  res.send("Home Page!");
});

module.exports = router;
