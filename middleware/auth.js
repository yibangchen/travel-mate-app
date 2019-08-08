require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.loginRequired = function(req, res, next) {
  try {

  } catch(e) {
    return next({
      status: 401,
      message: 'Please log in first'
    });
  }
}

exports.ensureCorrectUser = function(req, res, next) {
  try {

  } catch(e) {
    return next({
      status: 401,
      message: 'Not authorized!'
    });
  }
}