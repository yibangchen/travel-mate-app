const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  destinations: [{
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Location',
      required: true
    },
    arriveDate: {
      type: Date
    },
    departDate: {
      type: Date
    }
  }]
}, { timestamps: true } );

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
