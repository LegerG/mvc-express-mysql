const { studentRouter } = require("./student.route");
const Router = require("express").Router;

const apiRouter = new Router();

apiRouter.use("/students", studentRouter);

module.exports = { apiRouter };
