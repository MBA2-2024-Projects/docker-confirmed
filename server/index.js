const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const Counter = require("./counter");

const MONGO_DB_URL = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongodb:27017/${process.env.MONGO_INITDB_DATABASE}`;

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

async function incrementCounterByName(counterName) {
  try {
    let counter = await Counter.findOne({ name: counterName });
    if (!counter) {
      counter = new Counter({ name: counterName, value: 1 });
    } else {
      counter.value += 1;
    }
    await counter.save();
    console.log(`Compteur "${counterName}" incrémenté à ${counter.value}`);
  } catch (error) {
    console.error("Erreur lors de l'incrémentation du compteur :", error);
  }
}

async function getCounterValueByName(counterName) {
  try {
    const counter = await Counter.findOne({ name: counterName });
    if (counter) {
      return counter.value;
    } else {
      return -1;
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de la valeur du compteur :",
      error
    );
    throw error;
  }
}

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

app.get("/", cors(corsOptionsDelegate), async (req, res) => {
  incrementCounterByName("counter");
  const message = process.env.MESSAGE || "";
  const value = await getCounterValueByName("counter");
  res.json({ message: message, value: value });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
