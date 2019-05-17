const Todo = require("../models/TodoModel");

//Handle get requests for all Todos
exports.index = async function(req, res) {
  const allTodos = await Todo.find();
  res.json({ data: allTodos });
};

//Handle post requests
exports.new = async function(req, res) {
  let todo = new Todo({ todo: req.body.todo });

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
};
