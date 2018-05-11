const mongoose = require('mongoose'),
    Gold = mongoose.model('Gold');
var ninjas = require('../controllers/ninjas.js');
var path = require("path")
module.exports = function(app){

    app.get('/create/:id', (req, res)=>{
        ninjas.create(req, res);
    })
}