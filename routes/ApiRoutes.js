const router = require("express").Router();

const TodoController = require("../controller/TodoController");
const UserController = require("../controller/UserController");

//Api endpoints

// Todos
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

// Users
// All Users
router
  .route("/users")
  .get(UserController.index)
  .post(UserController.new);

//Export Router
module.exports = router;
