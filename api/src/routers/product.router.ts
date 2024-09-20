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
  .post("/product", createProduct)
  .get("/product/:id", getOneProduct)
  .put("/product/:id", updateProduct)
  .delete("/product/:id", deleteProduct);

export { productRouter };
