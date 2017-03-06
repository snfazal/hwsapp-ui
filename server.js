var express        = require('express');
var logger         = require('morgan');
// var bulma          = require('bulma');


var app = express();

app.use(express.static('public'))

app.use(logger('dev'));

app.listen(process.env.PORT || 4000, function() {
  console.log(`================`);
  console.log(`ALWAYS LISTENING`);
  console.log(`================`);
});
