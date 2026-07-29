import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const postStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "connectify_usersPost",
    allowedFormats: ["png", "jpg", "jpeg"],
  },
});

const profileStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "connectify_profiles",
    allowedFormats: ["png", "jpg", "jpeg"],
  },
});

export { cloudinary, postStorage, profileStorage };
