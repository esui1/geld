const express = require("express");
var cors = require("cors");
const transactionRouter = require("./routers/transaction-router.js");
const userRouter = require("./routers/user-router.js");
const categoryRouter = require("./routers/category-router.js");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// app.js

// routes
app.use("/transaction", transactionRouter);
app.use("/category", categoryRouter);
app.use("/user", userRouter);

// update user

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
