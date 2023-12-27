import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";

import db from './config/db.js'

const app = express();

dotenv.config();

app.use(morgan("dev"));
app.use(express.json());

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("app listening on port ", port);
});
