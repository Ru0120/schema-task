import mongoose from "mongoose";

//const { Schema } = mongoose;
export const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    profilePic: {
      type: String,
      require: false,
    },
    followers: {
      type: [String],
      requrie: false,
    },
    // },
    // following: {
    //   type: [String],
    //   require: false,
    // },
  },

  { timestamps: true, collection: "users" }
);
