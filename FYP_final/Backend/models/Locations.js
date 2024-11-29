const mongoose = require('mongoose');

// Define the Route schema
const RouteSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

// Define the Location schema
const LocationSchema = new mongoose.Schema({
  city: { type: String, required: true, unique: true },
  routes: [RouteSchema],
});

// Create and export the model
const Location = mongoose.model('Location', LocationSchema);
module.exports = Location;
