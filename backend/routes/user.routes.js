import { Router } from "express";
import {
  login,
  register,
  uploadProfilePicture,
  updateUserProfile,
  getUserAndProfile,
  updateProfileData,
  getAllUserProfile,
  downloadProfile,
  sendConnectionRequest,
  getMyConnectionRequests,
  whoIsMyConnection,
  acceptConnectionRequest,
  getUserProfileAndUserBasedOnUsername,
  uploadBannerPicture,
} from "../controllers/user.controller.js";
import { cloudinary, profileStorage } from "../cloudConfig.js";
import multer from "multer";
import profile from "../models/profile.model.js";
const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadProfile = multer({ storage: profileStorage });

router
  .route("/update_profile_picture")
  .post(uploadProfile.single("profile_picture"), uploadProfilePicture);
router
  .route("/update_banner_picture")
  .post(uploadProfile.single("banner_picture"), uploadBannerPicture);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/user_update").post(updateUserProfile);
router.route("/get_user_and_profile").get(getUserAndProfile);
router.route("/update_profile_data").post(updateProfileData);
router.route("/user/get_all_users").get(getAllUserProfile);
router.route("/user/download_resume").get(downloadProfile);
router.route("/user/send_connection_request").post(sendConnectionRequest);
router.route("/user/getConnectionRequests").get(getMyConnectionRequests);
router.route("/user/user_connection_request").get(whoIsMyConnection);
router.route("/user/accept_connection_request").post(acceptConnectionRequest);
router
  .route("/user/get_profile_based_on_username")
  .get(getUserProfileAndUserBasedOnUsername);
export default router;
