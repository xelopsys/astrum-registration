const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
  },
  language: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Number,
    required: true,
  },
  isStudent: {
    type: Boolean,
    required: true,
  },
  questionType: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  }

});
userSchema.plugin(uniqueValidator);

const UserTg = mongoose.model("UserTg", userSchema);

module.exports = UserTg;
