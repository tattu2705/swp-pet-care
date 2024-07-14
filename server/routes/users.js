var express = require("express");
var router = express.Router();
const User = require("../models/user.model");

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, address } = req.body;
  const user = new User({ firstName, lastName, email, password, address });
  try {
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email, password: password });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
