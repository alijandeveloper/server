const express = require('express');
const router = express.Router();

router.use(express.json());
// Route to handle POST requests for user registration
router.post('/register', (req, res) => {
    console.log(req.body); // Should log the incoming JSON data
    // If everything is provided, send back the data
    res.json({ message: "Data received successfully", data: req.body });
});

module.exports = router;
