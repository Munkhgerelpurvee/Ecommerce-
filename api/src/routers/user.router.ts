import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
} from "../controllers/user/user.controller";

const userRouter = Router();

userRouter
  .get("/users", getUsers)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  .delete("/users/:id", deleteUser)
  .get("/users/:id", getOneUser);

export { userRouter };
