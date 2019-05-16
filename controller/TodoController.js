const Todo = require("../models/TodoModel");

//Handle get requests for all Todos
exports.index = function(req, res) {
  Todo.get(function(err, Todos) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }

    res.json({
      status: "success",
      message: "successfully retrieved data",
      data: Todos
    });
  });
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
