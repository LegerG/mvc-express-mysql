const { db } = require("./db");

async function getAll() {
  const [rows] = await db.query("SELECT * FROM student");
  console.log(rows);

  return rows;
}

async function insertOne(student) {
  const { firstname, lastname, age, remote } = student;
  const [result] = await db.query(
    "INSERT INTO student (firstname, lastname, age, remote) VALUES (?, ?, ?, ?)",
    [firstname, lastname, age, remote]
  );

  return result.insertId;
}

async function getOne(id) {
  const [rows] = await db.query("SELECT * FROM student WHERE id = ?", [id]);
  return rows[0];
}

async function updateOne(id, student) {
  const { firstname, lastname, age, remote } = student;
  const [result] = await db.query(
    "UPDATE student SET firstname = ?, lastname = ?, age = ?, remote = ? WHERE id = ?",
    [firstname, lastname, age, remote, id]
  );

  return result.affectedRows;
}

async function deleteOne(id) {
  const [result] = await db.query("DELETE FROM student WHERE id = ?", [id]);

  return result.affectedRows;
}

module.exports = { getAll, insertOne, getOne, updateOne, deleteOne };
