import { Router } from "express";
import {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product/product.controller";

const productRouter = Router();

productRouter
  .get("/products", getProducts)
  .get("/product", getOneProduct)
  .post("/product", createProduct)
  .put("/product", updateProduct)
  .delete("/product", deleteProduct);

export { productRouter };
