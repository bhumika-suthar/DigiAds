const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Fetch all cities and their routes
router.get("/locations", async (req, res) => {
  try {
    const db = mongoose.connection.db; // Access the database directly
    const locations = await db.collection("locations").find().toArray(); // Fetch all documents
    res.status(200).json(locations);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error fetching locations: ${err.message}` });
  }
});

// Fetch routes for a specific city
router.get("/locations/:city", async (req, res) => {
  try {
    const db = mongoose.connection.db; // Access the database directly
    const cityName = req.params.city;
    const location = await db
      .collection("locations")
      .findOne({ city: cityName }); // Find document by city name
    if (!location) {
      return res.status(404).json({ message: `City '${cityName}' not found` });
    }
    res.status(200).json(location);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error fetching routes for city: ${err.message}` });
  }
});

module.exports = router;
