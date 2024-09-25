import { RequestHandler } from "express";
import { handleUpload } from "./../../configs/cloudinary";
import { Request, Response } from "express";

const uploader = async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).send("No file uploaded");

  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = `data:${req.file.mimetype};base64, ${b64}`;
    const uploaderRes = await handleUpload(dataURI);
    res.json(uploaderRes);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error uploading in file.`);
  }
};

export { uploader };
