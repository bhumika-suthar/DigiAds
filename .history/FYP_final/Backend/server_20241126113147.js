// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db'); // Import the DB connection

// // Load environment variables from the .env file
// dotenv.config(); // Load the .env file

// // Create an instance of express
// const app = express();

// // Call connectDB to establish the connection to MongoDB
// connectDB();

// // Middleware to parse incoming JSON requests
// app.use(express.json());

// // Define a simple route for testing
// app.get('/', (req, res) => {
//   res.send('Hello, the server is running!');
// });

// // Define the port to run the server on (using the PORT from .env file)
// const PORT = process.env.PORT || 5000;

// // Start the server and listen on the specified port
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from the .env file
dotenv.config();

// Create an instance of express
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(`Error: ${err.message}`));

// Define the API routes
const locationRoutes = require('./routes/LocationsRoutes'); // Import location routes
app.use('/api', locationRoutes);

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, the server is running!');
});

// Define the port to run the server on (using the PORT from .env file)
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
