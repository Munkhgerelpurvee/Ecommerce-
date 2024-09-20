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
  .post("/user", createUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser)
  .get("/user/:id", getOneUser);

export { userRouter };
