const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  completed: {
    type: String,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

let Todo = (module.exports = mongoose.model("todo", TodoSchema));

module.exports.get = function(callback, limit) {
  Todo.find(callback).limit(limit);
};
