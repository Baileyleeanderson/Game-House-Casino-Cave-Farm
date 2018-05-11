var mongoose = require('mongoose');
let Gold = mongoose.model('Gold');

module.exports = {
    
    create: (req, res) =>{
        var earned = "Earned";
        var building = req.params.id;
        console.log(building)
        if(building == 'farm'){
            var rand = Math.floor((Math.random()* 5) + 1);
        }
        if(building == 'cave'){
            var rand = Math.floor((Math.random()* 10) + 5);
        }
        if(building == 'house'){
            var rand = Math.floor((Math.random()* 15) + 7);
        }
        if(building == 'casino'){
            var rand = Math.floor((Math.random()* 100) + -100);
        }
        if(rand < 0){
            earned = "Lost"
        }
        var farm = new Gold({gold: rand, earned:earned,place: building});
            farm.save((err, newFarm)=>{
            if(err){
                console.log(err);
            }
            else{
                    res.json(newFarm);
                    console.log(newFarm)
            }
            });
    }

};