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
  const { amount, name, desc, date, time, selectedOption } = req.body;
  console.log({
    name,
    amount,
    desc,
    selectedOption,
    date,
    time,
    id,
  });

  const datetime = date + "T" + time;
  const response =
    await sql`update transactions set (amount, name, updated_at, description, category_id) = (${amount}, ${name}, ${datetime}, ${desc}, ${selectedOption.value}) where id = ${id}`;
  res.json(response);
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
