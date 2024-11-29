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
// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cors = require("cors"); // Add CORS middleware for external testing

// // Load environment variables from the .env file
// dotenv.config();

// // Create an instance of express
// const app = express();

// // Middleware to parse incoming JSON requests
// app.use(express.json());
// app.use(cors()); // Enable CORS

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI) // Removed deprecated options
//   .then(() => {
//     console.log("MongoDB connected");

//     // Debug: List collections after connection
//     mongoose.connection.db.listCollections().toArray((err, collections) => {
//       if (err) console.error("Error listing collections:", err);
//       console.log(
//         "Available collections:",
//         collections.map((c) => c.name) // Show collection names only
//       );
//     });
//   })
//   .catch((err) => {
//     console.error(`Error connecting to MongoDB: ${err.message}`);
//     process.exit(1); // Exit the process if MongoDB connection fails
//   });

// // Define the API routes
// const locationRoutes = require("./routes/LocationsRoutes"); // Import location routes
// app.use("/api", locationRoutes);

// // Define a simple route for testing
// app.get("/", (req, res) => {
//   res.send("Hello, the server is running!");
// });

// // Define the port to run the server on (using the PORT from .env file)
// const PORT = process.env.PORT || 5000;

// // Start the server and listen on the specified port
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors"); // Add CORS middleware for external testing

// Load environment variables from the .env file
dotenv.config();

// Create an instance of express
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI) // Removed deprecated options
  .then(() => {
    console.log("MongoDB connected");

    // Debug: List collections after connection
    mongoose.connection.db.listCollections().toArray((err, collections) => {
      if (err) console.error("Error listing collections:", err);
      console.log(
        "Available collections:",
        collections.map((c) => c.name) // Show collection names only
      );
    });
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Define the API routes
const locationRoutes = require("./routes/LocationsRoutes"); // Import location routes
app.use("/api", locationRoutes);

// Import authentication routes
const authRoutes = require("./routes/authenticationRoutes"); // Import your auth routes
app.use("/api/auth", authRoutes); // Mount auth routes under '/api/auth'

// Define a simple route for testing
app.get("/", (req, res) => {
  res.send("Hello, the server is running!");
});

// Define the port to run the server on (using the PORT from .env file)
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
