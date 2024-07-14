const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  address: String,
  role: {
    type: String,
    default: "pet_owner",
  }
});

module.exports = mongoose.model("User", userSchema);
