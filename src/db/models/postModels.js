import mongoose from "mongoose";
import { postSchema } from "../schema/postSchema.js";
export const Post = mongoose.model("Post", postSchema);
