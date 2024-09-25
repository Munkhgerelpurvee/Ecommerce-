import express from "express";
import Multer, { memoryStorage } from "multer";
import { uploader } from "../controllers/upload/Upload.controller";

const uploadRouter = express.Router();
const storage = memoryStorage();
const multer = Multer({ storage });

// middleware multer.single("image") - ni multer ruu one image-nii huseltiig image gesen nerteigeer yvuulna.

uploadRouter.post("/upload", multer.single("image"), uploader);

export { uploadRouter };
