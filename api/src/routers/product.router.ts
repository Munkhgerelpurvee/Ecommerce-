import { Router } from "express";
import {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSizes,
} from "../controllers/product/product.controller";

const productRouter = Router();

productRouter
  .get("/products", getProducts)
  .get("/sizes", getSizes)
  .post("/product", createProduct)
  .get("/product/:id", getOneProduct)
  .put("/product/:id", updateProduct)
  .delete("/product/:id", deleteProduct);

export { productRouter };
