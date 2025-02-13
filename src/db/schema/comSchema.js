import mongoose from "mongoose";

export const comSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    text: {
      type: String,
      require: false,
    },
    postid: {
      type: mongoose.Schema.Types.ObjectId,
      requrie: false,
    },
  },

  { timestamps: true, collection: "com" }
);
