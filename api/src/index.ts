import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { userModel } from "./models/UserModel";

import { userRouter } from "./routers/user.router";
import { categoryRouter } from "./routers/category.router";
import { productRouter } from "./routers/product.router";
import { authRouter } from "./routers/Auth.router";

connectToDatabase();
const app = express();

app.options("*", cors());
app.use(cors());
app.use(express.json());

// CRUD Routers
app.use(userRouter);
app.use(categoryRouter);
app.use(productRouter);
app.use(authRouter);

app.get("/", (_req, res) => {
  res.send([{ name: "USERNAME" }]);
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});
