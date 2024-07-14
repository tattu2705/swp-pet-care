// {
//     _id: ObjectId,
//     pet_id: ObjectId, // Tham chiếu đến Pets
//     doctor_id: ObjectId, // Tham chiếu đến Doctors
//     date: Date,
//     time: String,
//     status: String, // "pending", "accepted", "rejected", "completed"
//     reason: String,
//     notes: String
//   }

const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  date: Date,
  time: String,
  status: String,
  reason: String,
  user_name: String,
  user_phone: String,
  user_pet_type: String,
});

module.exports = mongoose.model("Appointment", appointmentSchema);