import { Router } from "express";
import transactionsController from "../controllers/transactions-controller.js";

const transactionRouter = Router()

transactionRouter.post('/transaction', transactionsController.create)

export default transactionRouter