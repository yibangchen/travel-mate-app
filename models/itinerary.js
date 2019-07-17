const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  details: {
    type: String
  }
}, { timestamps: true } );

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
