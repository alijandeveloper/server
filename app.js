const dotenv = require('dotenv');
dotenv.config({ path: './.env' }); // Load environment variables before everything else

const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use(require('./router/auth'));
 app.use(express.json());
// const User = require("./model/userSchema");


// Database connection
require('./db/connection'); // This requires your MongoDB connection file

const PORT = process.env.PORT;

// Middleware example
const middleware = (req, res, next) => {
    console.log("This is my middleware");
    next();
};

// Define Routes

// app.get('/aboutus', middleware, (req, res) => {
//     res.send("Hello World, This is My About Us Page");
// });
// app.get('/contactus', (req, res) => {
//     res.send("Hello World, This is My Contact Us Page");
// });
// app.get('/login', (req, res) => {
//     res.send("Hello World, This is My Login Page");
// });
// app.get('/signup', (req, res) => {
//     res.send("Hello World, This is My SignUp Page");
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
