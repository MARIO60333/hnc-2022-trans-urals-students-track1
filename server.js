require("dotenv").config({ path: "config.env" });
const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
var cors = require('cors')

const app = express();
const path = require("path");
const port = process.env.EXPRESS_PORT || 5000;

const root = require("./expressRoutes/Root");
const api = require("./expressRoutes/API");

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors())

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: process.env.SECRET1,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

app.use(cookieParser());

app.use("/", root);
app.use("/api", api);
