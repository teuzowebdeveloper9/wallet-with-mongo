import { Router } from "express";
import transactionsController from "../controllers/transactions-controller.js";
import { middleware } from "../middleware/auth-middleware.js";

const transactionRouter = Router()

transactionRouter.post('/transaction', middleware() ,transactionsController.create)

export default transactionRouter