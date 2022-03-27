const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    // unique: true,
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
    type: Array,
    required: true,
  },
  question: {
    type: Array,
    required: true,
  },
  answer: {
    type: Array,
    required: true,
  }

});
userSchema.plugin(uniqueValidator);

const UserTg = mongoose.model("UserTg", userSchema);

module.exports = UserTg;
