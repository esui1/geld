const { sql } = require("../config/database");

const transactions = async (req, res) => {
  const result = await sql`select * from transactions`;

  res.json(result);
};

const createTransaction = async (req, res) => {
  const { user_id, name, amount, transaction_type, description, category_id } =
    req.body;
  const response =
    await sql`insert into transactions(user_id, name, amount, transaction_type, description, category_id) values (${user_id}, ${name}, ${amount}, ${transaction_type}, ${description}, ${category_id})`;

  res.json(response);
};

const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, avatar_img } = req.body;
  await sql`select * from transaction`;
  res.json([{ writewas: "succesful" }]);
};

const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  await sql`select * from transactions`;

  res.json([{ status: "success" }]);
};
module.exports = {
  transactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
