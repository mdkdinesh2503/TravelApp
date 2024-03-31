const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  }
});

const registerModel = mongoose.model("Register", registerSchema);

module.exports = registerModel;