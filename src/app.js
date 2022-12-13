const express = require("express");
const { apiRouter } = require("./route");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.get("*", (req, res) => {
  res.status(404).send({ message: "Not found !" });
});

module.exports = app;
