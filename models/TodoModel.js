const mongoose = require("mongoose");

//Defining MongoDB Schema
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

//Export MongoDB Schema
module.exports = mongoose.model("todo", TodoSchema);
