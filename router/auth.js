const express = require("express");
const router = express.Router();

require("../db/connection");
const User = require("../model/userSchema");

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "All fields are required." });
  }

  try {
    // Check if the user already exists
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "User already exists." });
    }
    // Create a new user
    const user = new User({ name, email, phone, work, password, cpassword });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
