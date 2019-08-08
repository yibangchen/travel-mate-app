const express = require('express');
const router = express.Router();
const { startItinerary, modifyItinerary, deleteItinerary } = require('../handlers/itinerary');

router.post('/itinerary', startItinerary);

module.exports = router;
