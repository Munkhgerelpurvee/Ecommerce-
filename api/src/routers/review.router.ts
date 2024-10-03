import { Router } from "express";
import { getReview } from "../controllers/review/review.controller";

const reviewRouter = Router();

reviewRouter.get("/review", getReview);

export { reviewRouter };
