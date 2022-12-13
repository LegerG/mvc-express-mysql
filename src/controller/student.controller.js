const studentModel = require("../model/student.model");
const studentValidator = require("../validators/student.validator");

async function list(req, res) {
  const students = await studentModel.getAll();
  res.json(students);
}

async function create(req, res) {
  if (!req.body || studentValidator.validate(req.body, true).errorCount > 0) {
    res.sendStatus(400);
    return;
  }

  const insertId = await studentModel.insertOne(req.body);

  res.status(201).json({ insertId });
}

async function get(req, res) {
  if (!req.params.id) {
    res.sendStatus(400);
    return;
  }

  const student = await studentModel.getOne(req.params.id);

  if (!student) {
    res.sendStatus(404);
    return;
  }

  res.json(student);
}

async function update(req, res) {
  if (!req.body || studentValidator.validate(req.body, false).errorCount > 0) {
    res.sendStatus(400);
    return;
  }

  const affectedRows = await studentModel.updateOne(req.params.id, req.body);

  if (affectedRows === 0) {
    res.sendStatus(404);
    return;
  }

  res.sendStatus(204);
}

async function remove(req, res) {
  if (!req.params.id) {
    res.sendStatus(400);
    return;
  }

  const affectedRows = await studentModel.deleteOne(req.params.id);

  if (affectedRows === 0) {
    res.sendStatus(404);
    return;
  }

  res.sendStatus(204);
}

module.exports = { list, create, get, update, remove };
