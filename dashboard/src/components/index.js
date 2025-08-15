const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");

const {HoldingsModel} = require('./models/HoldingsModel');
const { PositionsModel } = require("./models/PositionsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});




mongoose.connect(uri);

  app.listen(3002, () => {
    console.log("app started");
    
  });

