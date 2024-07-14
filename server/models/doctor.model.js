
const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  availability: [
    {
      day: String,
      start_time: String,
      end_time: String,
    },
  ],
});

module.exports = mongoose.model("Doctor", doctorSchema);