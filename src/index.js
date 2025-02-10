import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { User } from "./db/models/userModels.js";
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL;

mongoose.connect(url).then(() => {
  console.log("mongo connected");
});
app.post("/", async (req, res) => {
  try {
    await User.create({
      profilePic:
        "https://www.shutterstock.com/image-vector/user-profile-3d-icon-avatar-person-2226554631",
      username: "Han",
      followers: [],
      // following:
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});
app.get("/userid", async (req, res) => {
  try {
    await await User.create({});
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log(`app running on ${port}`);
});
