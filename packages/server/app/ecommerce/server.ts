import "express-async-errors";

import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import router from "./src/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err) {
    return res.status(500).json({ message: err.message })
  }

  next();
})

mongoose.connect("mongodb://localhost/app_1")
  .then(() => console.log("mongoose connected"))
  .catch(err => console.error(err));

app.listen(3334, () => console.log("server is running at port 3334"))