var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");
var mongoose = require('mongoose');
var app = express();
mongoose.Promise = global.Promise;
 
app.use(express.static( __dirname + '/public/dist' ));
app.use(bodyparser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
mongoose.connect('mongodb://localhost/NinjaGold');

app.listen(8000, function(){
    console.log("listening to port 8000");
});