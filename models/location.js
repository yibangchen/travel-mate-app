const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  uniCode: {
    type: String,
    required: true
    unique: true
  },
  city: {
    type: String,
    required: true
  },
  region: {
    type: String
  },
  country: {
    type: String
  }
}, { timestamps: true } );

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
