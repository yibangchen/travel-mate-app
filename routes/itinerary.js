const express = require('express');
const router = express.Router();
const { getItinerary, createItinerary, modifyItinerary, deleteItinerary } = require('../handlers/itinerary');

// prefix /api/users/:id/itinerary
router
  .route('/')
  .get(getItinerary)
  .post(createItinerary)
  .put(modifyItinerary)
  .delete(deleteItinerary);

module.exports = router;