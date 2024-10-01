const express = require('express');
const router = express.Router();

require('../db/connection');
const User = require('../model/userSchema');

// Route to handle POST requests for user registration
router.post('/register', (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "All fields are required." });
    }

    // Check if passwords match
    if (password !== cpassword) {
        return res.status(422).json({ error: "Passwords do not match." });
    }

    
    // Check if the user already exists
    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "User already exists." });
            }

            // Create a new user
            const user = new User({ name, email, phone, work, password, cpassword });

            // Save the user to the database
            user.save()
                .then(() => {
                    res.status(201).json({ message: "User registered successfully." });
                })
                .catch((err) => {
                    console.error(err); // Log the error for debugging
                    res.status(500).json({ message: "User not registered." });
                });
        })
        .catch(err => {
            console.error(err); // Log any errors that occur in findOne
            res.status(500).json({ message: "Internal server error." });
        });
});

module.exports = router;
