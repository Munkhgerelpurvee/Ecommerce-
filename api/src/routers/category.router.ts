import { Router } from "express";
import {
  getCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category/category.controller";

const categoryRouter = Router();

categoryRouter
  .get("/categories", getCategories)
  .post("/category", createCategory)
  .get("/category/:id", getOneCategory)
  .put("/category/:id", updateCategory)
  .delete("/category/:id", deleteCategory);

export { categoryRouter };
