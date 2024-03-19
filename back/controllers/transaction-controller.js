const { sql } = require("../config/database");
const { v4: id } = require("uuid");

const transactions = async (req, res) => {
  const result = await sql`select * from transactions`;

  res.json(result);
};
// creating new transaction
const createTransaction = async (req, res) => {
  const {
    user_id,
    name,
    amount,
    transaction_type,
    desc,
    selectedOption,
    date,
    time,
  } = req.body;

  console.log({
    user_id,
    name,
    amount,
    transaction_type,
    desc,
    selectedOption,
    date,
    time,
  });
  const datetime = date + "T" + time;
  // date+time=datetime to combine date and time in one data.
  const response =
    await sql`insert into transactions(id, user_id, name, amount, transaction_type, description, category_id, created_at) values (${id()}, ${user_id}, ${name}, ${amount}, ${transaction_type}, ${desc}, ${
      selectedOption.value
    }, ${datetime})`;

  res.json(response);
};
// editing transaction
const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, avatar_img } = req.body;
  await sql`select * from transaction`;
  res.json([{ writewas: "succesful" }]);
};
// deleting transaction
const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  await sql`delete from transactions where id = ${id}`;

  res.json([{ status: "success" }]);
};
module.exports = {
  transactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
