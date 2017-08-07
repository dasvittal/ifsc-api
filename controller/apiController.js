

var ifscData = require('./../models/ifscData.model');

var getBanks = function(req, res, next) {
  ifscData.distinct('BANK')
    .exec(function (err, data) {
      if(err){
        res.status(500);
        res.send("Internal Server error");
      } else {
        res.status(200);
        res.json(data);
      }
  });
};

var getState = function(req, res, next) {
  console.log("\x1b[36m",'getting state names..');
  ifscData.distinct('STATE')
    .exec(function (err, data) {
            if (err){
                res.status(500);
                res.send("Internal Server error");
            } else {
                res.status(200);
                res.json(data);
                console.log("\x1b[35m",data.length ,"\x1b[37m", 'data found');
          }
  });
};

var getDistrict = function(req, res, next) {
    console.log("\x1b[36m",'getting district names for state:', req.params.state);
    ifscData.find({ 'STATE' : req.params.state })
    .distinct('DISTRICT')
    .exec(function (err, data) {
      if(err){
        res.status(500);
        res.send("Internal Server error");
      }
      else{
        res.status(200);
        res.json(data);
        console.log("\x1b[35m",data.length ,"\x1b[37m", 'data found');
      }
  });
};

var getBranch = function (req, res, next) {
      console.log("\x1b[36m",'getting branch names for state:', req.params.state, 'district:',req.params.district);
      ifscData.find({
               $and : [
                    { 'STATE': req.params.state },
                    { 'DISTRICT': req.params.district }
               ]
        }).exec(function (err, data) {
          if(err){
            res.status(500);
            res.send("Internal Server error");
          }
          else{
            res.status(200);
            res.json(data);
            console.log("\x1b[35m",data.length ,"\x1b[37m", 'data found');
          }
      });
};

module.exports = {
      getBanks : getBanks,
      getState : getState,
      getDistrict : getDistrict,
      getBranch : getBranch
};