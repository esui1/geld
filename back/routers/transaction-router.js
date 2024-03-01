const express = require("express");

const {
  transactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction-controller");

const transactionRouter = express.Router();

transactionRouter.get("/", transactions);
transactionRouter.post("/create", createTransaction);
transactionRouter.put("/update/:id", updateTransaction);
transactionRouter.delete("/delete/:id", deleteTransaction);

module.exports = transactionRouter;
