var FoodTruck = require('../models/foodTruck');

exports.updateStatus = function(req, res, status) {
  FoodTruck.findOne({}, function(err, truck) {
    if (err) { res.send(err); }

    // update status
    truck.status = status;

    truck.save(function(err) {
      if (err) { res.send(err); }

      res.json(truck);
    });
  });
};
