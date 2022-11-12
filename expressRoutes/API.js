const express = require("express");
const axios = require("axios");
const { MongoClient } = require("mongodb");
const router = express.Router();

const mongo_url = process.env.MONGO_URL || "mongodb://0.0.0.0:27017";

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
    msg: `POST Pong: ${req.body.msg}`,
  });
});

// router.post("/singus", function (req, res) {
//   axios({
//     method: "post",
//     url:
//       process.env.AXIOS_ALFA_URL + "/api/external/v1/waiter/registration/data",
//     headers: { Authorization: process.env.AXIOS_ALFA_TOKEN },
//     data: {
//       codeId: null,
//       sector: "tip",
//       isDuplicateCodesAllowed: null,
//       groupId: process.env.AXIOS_ALFA_GROUP_ID,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       phoneNumber: req.body.phoneNumber,
//     },
//   }).then(function (response) {
//     let client = new MongoClient(mongo_url);

//     async function run() {
//       try {
//         const db = client.db("baseUser");
//         const users = db.collection("users");

//         const checkUserName = await users.findOne({
//           username: req.body.username,
//         });
//         if (checkUserName == null) {
//           const doc = {
//             codeId: response.data.code,
//             username: req.body.username,
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             password: req.body.password,
//             phoneNumber: req.body.phoneNumber,
//           };

//           const result = await users.insertOne(doc);

//           console.log(
//             `A document was inserted with the _id: ${result.insertedId}`
//           );
//         } else {
//           throw {name: 1, message: "This username is exist!"}
//           await client.close();
//           return;
//         }
//       } finally {
//         await client.close();
//       }
//     }
//     run().catch( e => {
//       throw e
//     });
//   });

//   res.json({
//     status: 0,
//   });
// });

router.post("/signus", function (req, res) {
  const client = new MongoClient(mongo_url);

  console.log("[SingUs] MongoDB client opened (init)");

  async function run() {
    try {
      const db = client.db("baseUser");
      const users = db.collection("users");

      const checkUserName = await users.findOne({
        username: req.body.username,
      });

      if (checkUserName == null) {
        const doc = {
          username: req.body.username,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: req.body.password,
          phoneNumber: req.body.phoneNumber,
        };

        await axios({
          method: "post",
          url:
            process.env.AXIOS_ALFA_URL +
            "/api/external/v1/waiter/registration/data",
          headers: { Authorization: process.env.AXIOS_ALFA_TOKEN },
          data: {
            codeId: null,
            sector: "tip",
            isDuplicateCodesAllowed: null,
            groupId: process.env.AXIOS_ALFA_GROUP_ID,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
          },
        }).then(function (response) {
          doc.nm_codeId = response.data.code;
        });

        const result = await users.insertOne(doc);

        console.log(
          `baseUser DB > users collection > _id: ${result.insertedId} inserted`
        );

        res.json({
          status: 0
        });
      } else {
        throw { name: 1, message: "This Username is exist!" };
      }
    } catch (e) {
      res.status(500).json({
        status: e.name,
        msg: e.message,
      });
      return;
    } finally {
      client.close();
      console.log("[SingUs] MongoDB client closed (init)");
    }
  }
  run();
});

router.post("/signin", function (req, res) {
  res.json({
    msg: `POST Pong: ${req.body.msg}`,
  });
});

module.exports = router;
