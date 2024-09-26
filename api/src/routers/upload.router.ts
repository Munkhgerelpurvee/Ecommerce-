import express from "express";
import Multer, { memoryStorage } from "multer";
import { uploader } from "../controllers/upload/Upload.controller";

const uploadRouter = express.Router();
// Бид нар frontEnd-ээсээ зургаа орууллаа api- руу өглөө буюу api- upload хийхнэ гэдэг нь манай зургийг татаж авч байгаа юм. Тэр хадгалж авсан зургаа дахин цааш cloudinary руу хийнэ гэсэн үг. memoryStorage() гээд api-  RUM дээрээ нэг Storage нээж байгаа гэсэн үг.
const storage = memoryStorage();
const multer = Multer({ storage });

// middleware multer.single("image") - ni multer ruu one image-nii huseltiig image gesen nerteigeer yvuulna.

uploadRouter.post("/upload", multer.single("image"), uploader);

export { uploadRouter };
