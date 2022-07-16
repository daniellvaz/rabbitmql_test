import express from "express";
import cors from "cors"
import router from "./src/routes";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router)

mongoose.connect("mongodb://localhost/app_1")
  .then(() => console.log("mongoose connected"))
  .catch(err => console.error(err));


app.listen(3335, () => console.log("server is running at port 3335"))