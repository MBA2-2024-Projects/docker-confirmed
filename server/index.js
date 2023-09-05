const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const mongoose = require("mongoose");

const MONGO_DB_URL = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongodb:27017/${process.env.MONGO_INITDB_DATABASE}`;

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const allowlist = ["http://localhost:3000", "http://localhost:3001"];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.get("/", cors(corsOptionsDelegate), (req, res) => {
  const message = process.env.MESSAGE || "";
  res.json({ message: message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
