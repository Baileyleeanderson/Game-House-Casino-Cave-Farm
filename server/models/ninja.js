const mongoose = require('mongoose');


var goldSchema = new mongoose.Schema({
    gold: Number,
    earned: String,
    place: String
    
});
mongoose.model('Gold', goldSchema);