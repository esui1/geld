const { sql } = require("../config/database");
const { v4: id } = require("uuid");

const category = async (req, res) => {
  const result = await sql`select * from categories`;

  res.json(result);
};

module.exports = {
  category,
};
