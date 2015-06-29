var mongoose = require('mongoose');

var FoodTruckSchema = new mongoose.Schema({
  name: String,
  status: { type: String, default: 'NOT_HERE' }
});

module.exports = mongoose.model('FoodTruck', FoodTruckSchema);
