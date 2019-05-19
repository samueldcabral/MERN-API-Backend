const bcrypt = require("bcrypt");

const User = require("../models/UserModel");

//Handle get requests for all Users
exports.index = async function(req, res) {
  const allUsers = await User.find();

  res.json({ data: allUsers });
};

// //Handle get request for a specific User
// exports.view = async function(req, res) {
//   const specificTodo = await Todo.findById(req.params.id);
//   res.json(specificTodo);
// };

// //Handle put request for a specific Todo
// exports.update = function(req, res) {
//   Todo.findById(req.params.id, async (err, todo) => {
//     if (err) {
//       res.json(err.message);
//     }

//     todo.todo = req.body.todo ? req.body.todo : todo.todo;
//     todo.completed = req.body.completed ? req.body.completed : todo.completed;

//     try {
//       const updatedTodo = await todo.save();
//       res.json(updatedTodo);
//     } catch (err) {
//       res.json(err.message);
//     }
//   });
// };

// //Handle delete request for a specific Todo
// exports.delete = function(req, res) {
//   Todo.findById(req.params.id, async (err, todo) => {
//     if (err) {
//       res.json(err.message);
//     }

//     try {
//       await todo.delete(todo);
//       res.json({ message: "Delete successful" });
//     } catch (err) {
//       res.json(err.message);
//     }
//   });
// };

//Handle post requests
exports.new = async function(req, res) {
  let user = new User({ name: req.body.name, password: req.body.password });

  const saltRounds = 10;
  const myPlaintextPassword = user.password;

  try {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(myPlaintextPassword, salt, async function(err, hash) {
        // Store hash in your password DB.
        user.password = hash;
        const savedUser = await user.save();
        res.json(savedUser);
      });
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};
