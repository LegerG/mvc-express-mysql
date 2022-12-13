const Router = require("express").Router;
const studentController = require("../controller/student.controller");

const studentRouter = new Router();

studentRouter.get("/", studentController.list);
studentRouter.post("/", studentController.create);
studentRouter.get("/:id", studentController.get);
studentRouter.put("/:id", studentController.update);
studentRouter.delete("/:id", studentController.remove);

module.exports = { studentRouter };
