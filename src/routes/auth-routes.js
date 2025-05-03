import { Router } from "express";
import authcontroller from "../controllers/auth-controller.js";


export const authRouter = Router();

authRouter.post('/signup', authcontroller.signup)