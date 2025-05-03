import { Router } from "express";
import authcontroller from "../controllers/auth-controller.js";
import { middleware } from "../middleware/auth-middleware.js";

export const authRouter = Router();

authRouter.post('/signup', authcontroller.signup),
authRouter.post('/signin', authcontroller.signin )
authRouter.get('/me', middleware, authcontroller.userLogged )