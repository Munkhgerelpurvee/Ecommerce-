import { Router } from "express";
import { register, login } from "../controllers/auth/AuthController";

const authRouter = Router();

authRouter.post("/register", register).post("/login", login);

export { authRouter };
