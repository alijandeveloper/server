const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("this is my router auth page");
});

router.post('/register', (req, res) => {
    req.body;
    res.send("successfully data submit");
});

module.exports = router;