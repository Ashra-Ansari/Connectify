import { Router } from "express";

import {
  createPost,
  deletePost,
  get_comments_by_post,
  getAllPosts,
  delete_comment_of_user,
  increment_likes,
} from "../controllers/post.controller.js";
import multer from "multer";
import { cloudinary, storage } from "../cloudConfig.js";
import { commentPost } from "../controllers/user.controller.js";

const router = Router();
const upload = multer({ storage });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

router.route("/post").post(upload.single("media"), createPost);
router.route("/posts").get(getAllPosts);
router.route("/delete_post").delete(deletePost);
router.route("/comment").post(commentPost);
router.route("/get_comments").get(get_comments_by_post);
router.route("/delete_comment").delete(delete_comment_of_user);
router.route("/increment_post_like").post(increment_likes);

export default router;
