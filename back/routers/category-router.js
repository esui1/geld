const express = require("express");

const { category } = require("../controllers/category-controller");

const categoryRouter = express.Router();

categoryRouter.get("/", category);
// transactionRouter.post("/create", createTransaction);
// transactionRouter.put("/update/:id", updateTransaction);
// transactionRouter.delete("/delete/:id", deleteTransaction);

module.exports = categoryRouter;
