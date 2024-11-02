require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

cors({
  origin: "process.env.CLIENT_URL",
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.use(express.json());

//Db Connection
mongoose
  .connect(DB_URL)
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));
  
  app.use
  app.listen(PORT,()=>{
    console.log(`Server is now running on port  ${PORT}`)
  })