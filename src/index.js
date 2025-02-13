import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { User } from "./db/models/userModels.js";
import { Post } from "./db/models/postModels.js";
import { Com } from "./db/models/comModels.js";
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
      following: [],
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});
app.post("/post", async (req, res) => {
  try {
    await Post.create({
      caption: "Check out this amazing sunset!",
      imageUrl: "https://example.com/sunset.jpg",
      user: "67ac652806cfc48dc58e7da7",
      likes: [],
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});
app.post("/com", async (req, res) => {
  try {
    await Com.create({
      username: "Eddie",
      text: "first text",
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});
app.get("/userid", async (req, res) => {
  //const userid=await
});
app.listen(port, () => {
  console.log(`app running on ${port}`);
});
