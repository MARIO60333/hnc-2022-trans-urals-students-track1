const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const root = require("./expressRoutes/Root");
const api = require("./expressRoutes/API");

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/", root);
app.use("/api", api);
