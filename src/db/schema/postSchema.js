import mongoose from "mongoose";

export const postSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      //required: true,
      unique: true,
    },
    caption: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      requrie: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      required: false,
    },
  },

  { timestamps: true, collection: "post" }
);
