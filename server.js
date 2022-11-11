require('dotenv').config({ path: "config.env"});
const express = require("express");
const app = express();
const path = require("path")
const port = process.env.EXPRESS_PORT || 5000;

const root = require("./expressRoutes/Root");
const api = require("./expressRoutes/API");

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/", root);
app.use("/api", api);
