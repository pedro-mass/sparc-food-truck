var FoodTruck = require('./models/foodTruck');

var foodTruckController = require('./controllers/foodTruck.server.controller');

module.exports = function(app) {
  // load the Angular start page
  app.get('/', function(req, res) {
    res.render('index');
  });

  // API Routes ================
  app.get('/api/foodTruck', function(req, res) {
    FoodTruck.findOne({}, function(err, truck) {
      if (err) { res.send(err); }

      // create a truck if one doesn't exist
      if (!truck) {
        truck = new FoodTruck();
        truck.name = 'Some other truck';

        truck.save(function(err) {
          if (err) { res.send(err); }
        });
      }

      res.json(truck);
    });
  });


  // special one off routes -------------------------
  app.put('/api/cancelTruck', function(req, res) {
    foodTruckController.updateStatus(req, res, 'CANCELLED');
  });

  app.put('/api/alertTruck', function(req, res) {
    foodTruckController.updateStatus(req, res, 'HERE');
  });

  app.put('/api/resetTruck', function(req, res) {
    foodTruckController.updateStatus(req, res, 'NOT_HERE');
  });
  
  

  // catch all
  app.get('/*', function(req, res) {
    res.redirect('/');
  })
};
