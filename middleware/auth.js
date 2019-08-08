require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.loginRequired = function(req, res, next) {
  try {
    // Bearer ...token
    const token = req.headers.authorization.split(" ")[1];
    jwt.verity(token, process.env.SECRET_KEY, function(err, decoded){
      if (decoded) return next();
      return next({
        status: 401,
        message: 'Please log in first'        
      })
    })
  } catch(e) {
    return next({
      status: 401,
      message: 'Please log in first'
    });
  }
}

exports.ensureCorrectUser = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verity(token, process.env.SECRET_KEY, function(err, decoded){
      if (decoded && decoded.id === req.params.id)
        return next();
      return next({
        status: 401,
        message: 'Not authorized!'
      })
    }    
  } catch(e) {
    return next({
      status: 401,
      message: 'Not authorized!'
    });
  }
}