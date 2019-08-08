const db = require('../models');

exports.startItinerary = async function(req, res, next) {
  try {

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

}
