const mongoose = require('mongoose');

const DB = process.env.DATABASE; // Load MongoDB connection string from environment variables

mongoose.connect(DB).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.log("Failed to connect to MongoDB:", err);
});
