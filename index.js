require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8081;
const errorHandler = require('./handlers/error');

const authRoutes = require('./routes/auth');

app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/api/auth', authRoutes);

app.use(function(req, res, next){
  let err = new Error("404 not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
  console.log(`Server running on PORT ${PORT}`);
});
