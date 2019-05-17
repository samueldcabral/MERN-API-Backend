const Todo = require("../models/TodoModel");

//Handle get requests for all Todos
exports.index = async function(req, res) {
  const allTodos = await Todo.find();
  res.json({ data: allTodos });
};

//Handle get request for a specific Todo
exports.view = async function(req, res) {
  const specificTodo = await Todo.findById(req.params.id);
  res.json(specificTodo);
};

//Handle put request for a specific Todo
exports.update = function(req, res) {
  Todo.findById(req.params.id, async (err, todo) => {
    if (err) {
      res.json(err.message);
    }

    todo.todo = req.body.todo ? req.body.todo : todo.todo;
    todo.completed = req.body.completed ? req.body.completed : todo.completed;

    try {
      const updatedTodo = await todo.save();
      res.json(updatedTodo);
    } catch (err) {
      res.json(err.message);
    }
  });
};

//Handle delete request for a specific Todo
exports.delete = function(req, res) {
  Todo.findById(req.params.id, async (err, todo) => {
    if (err) {
      res.json(err.message);
    }

    try {
      await todo.delete(todo);
      res.json({ message: "Delete successful" });
    } catch (err) {
      res.json(err.message);
    }
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
