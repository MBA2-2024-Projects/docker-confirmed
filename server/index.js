const express = require("express");
const cors = require('cors');
const app = express();
const port = 3001;

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
