const router = require("express").Router();
const TodoController = require("../controller/TodoController");

//Api endpoints

//All Todos
router
  .route("/todos")
  .get(TodoController.index)
  .post(TodoController.new);

//Specific Todos by ID
router
  .route("/todos/:id")
  .get(TodoController.view)
  .put(TodoController.update)
  .delete(TodoController.delete);

//Export Router
module.exports = router;
