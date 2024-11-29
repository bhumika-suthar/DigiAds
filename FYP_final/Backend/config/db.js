const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded here

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI; // Get MongoDB URI from .env

    if (!mongoURI) {
      throw new Error('MONGO_URI is not defined in .env file');
    }

    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit the process with a failure status
  }
};

module.exports = connectDB;
