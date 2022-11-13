require("dotenv").config({ path: "config.env" });
const http = require("http");
const express = require("express");
const WebSocket = require("ws");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const cors = require("cors");
const path = require("path");

const app = express();
const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({ server });

const port = process.env.EXPRESS_PORT || 5000;

const root = require("./expressRoutes/Root");
const api = require("./expressRoutes/API");
const axios = require("axios");

const dispatchEvent = (message, ws) => {
  const json = JSON.parse(message);
  ws.send(
    JSON.stringify({
      status: 0,
      id: json.nm_codeid,
    })
  );
};

webSocketServer.on("connection", (ws) => {
  ws.on("message", (m) => dispatchEvent(m, ws));
  ws.on("error", (e) => ws.send(e));

  // КОСТЫЛЬ ДЛЯ ДЕМОНСТРАЦИИ

  let lastId = "9d9dd9ed-bbbe-4ee7-96e3-42d55241c9e2";

  setInterval(function () {
    console.log("check donations");
    axios({
      method: "GET",
      url:process.env.AXIOS_ALFA_URL + "/api/external/v1/transaction/restaurant/overall/comments",
      headers: { Authorization: process.env.AXIOS_ALFA_TOKEN },
    }).then(function (response) {
      let data = response.data.data;

      if (data[0].id != lastId) {
        lastId = data[0].id;
        console.log(`NEW ID: ${data[0].id}`);
        console.log(`${JSON.stringify(data[0])}`)
        let msg = data[0].message
        ws.send(JSON.stringify({
            status: 200,
            data: msg,
            debug: data[0]
        }))
      }
    });
  }, 5000);

  // КОНЕЦ КОСТЫЛЯ
});

server.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: process.env.SECRET1,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.use(cookieParser());

app.use("/", root);
app.use("/api", api);
app.use(
  "/streamerclient/",
  express.static(path.join(__dirname, "streamerclient"))
);
