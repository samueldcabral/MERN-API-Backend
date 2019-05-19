const mongoose = require("mongoose");

//Defining MongoDB Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

//Export MongoDB Schema
module.exports = mongoose.model("user", UserSchema);
