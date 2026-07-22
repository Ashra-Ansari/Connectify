import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  body: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  media: {
    url: {
      type: String,
      default: "",
    },
    public_id: {
      type: String,
      default: "",
    },
  },
  active: {
    type: Boolean,
    default: true,
  },
  fileType: {
    type: String,
    default: "",
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
