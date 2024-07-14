const express = require("express");
const router = express.Router();

const Appointment = require("../models/appointment.model");

router.get("/", async (req, res) => {
    try {
      const appointments = await Appointment.find()
        .populate('user')
        .populate('doctor');
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.post("/", async (req, res) => {
    const appointment = new Appointment({
      user: req.body.user,
      doctor: req.body.doctor,
      date: req.body.date,
      time: req.body.time,
      status: req.body.status || "pending",
      reason: req.body.reason,
      user_name: req.body.user_name,
      user_phone: req.body.user_phone,
      user_pet_type: req.body.user_pet_type
    });
  
    try {
      const newAppointment = await appointment.save();
      res.status(201).json(newAppointment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  router.get('/user/:id', async (req, res) => {
    //and status is accepted
    try {
      const appointments = await Appointment.find({ user: req.params.id, status: 'accepted' })
        .populate('user')
        .populate('doctor');
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.post('/update/:id', async (req, res) => {
    try {
      const appointment = await Appointment.findById(req.params.id);
      appointment.status = req.body.status;
      const updatedAppointment = await appointment.save();
      res.json(updatedAppointment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;