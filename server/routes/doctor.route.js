const express = require("express");

const router = express.Router();

const Doctor = require("../models/doctor.model");

router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find()
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;