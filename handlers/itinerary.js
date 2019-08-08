const db = require('../models');

// no need to request signed in user's itinerary
exports.getItinerary = async function(req, res, next) {
  try {
    let itineary = await db.Itinerary.find(req.params.itinerary_id);
    return res.status(200).json(itinerary);
  } catch(err) {
    return next(err);
  }
}

exports.createItinerary = async function(req, res, next) {
  try {
    let itinerary = await db.Itinerary.create({
      user: req.params.id
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.itineraries.push(itinerary.id);
    await foundUser.save();
    // let foundItinerary = await db.Itinerary.findById()
    return res.status(200).json(itinerary);
  } catch(err) {
    if (err.code === 11000) {
      err.message="?????";
    }
    return next({
      status: 400,
      message: err.message
    });
  }  
}

exports.modifyItinerary = async function(req, res, next) {

}

exports.deleteItinerary = async function(req, res, next) {
  try {
    let foundItinerary = await db.Itinerary.findById(req.params.itinerary_id);
    await db.Itinerary.deleteOne(foundItinerary);
    // still need to delete from user's profile!!
    return res.status(200).json(foundItinerary);
  } catch(err) {
    return next(err);
  }
}
