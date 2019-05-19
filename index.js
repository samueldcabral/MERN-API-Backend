const express = require("express");
const app = express();
const apiRouter = require("./routes/ApiRoutes");
const mongoose = require("mongoose");
require("dotenv").config();

//Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Api Endpoints
app.use("/api", apiRouter);

//Setting up MongoDB connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
let db = mongoose.connection;

app.listen(process.env.PORT, () =>
  console.log(`Server listenning on port ${process.env.PORT}...`)
);
