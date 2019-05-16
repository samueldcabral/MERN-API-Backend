const router = require("express").Router();
const TodoController = require("../controller/TodoController");

//Api endpoints
router
  .route("/")
  .get(TodoController.index)
  .post(TodoController.new);

//Export Router
module.exports = router;
