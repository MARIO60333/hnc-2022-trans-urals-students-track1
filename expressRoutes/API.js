const express = require("express");
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time API: ", Date.now());
  next();
});

router.get("/", function (req, res) {
  res.json({
    msg: "Simple message!",
  });
});

router.get("/getping", function (req, res) {
  res.json({
    msg: `GET Pong: ${req.query.msg}`,
  });
});

router.post("/postping", function (req, res) {
    res.json({
      msg: `POST Pong: ${req.body.msg}`
    })
  });

module.exports = router;
