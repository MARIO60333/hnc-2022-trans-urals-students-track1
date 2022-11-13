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

  ws.send("Hi there, I am a WebSocket server");
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
  express.static(path.join(__dirname, "streamerclient", "index.html"))
);
