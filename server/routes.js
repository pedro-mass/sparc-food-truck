module.exports = function(app) {
  // load the Angular start page
  app.get('/', function(req, res) {
    res.render('index');
  });

  var truck = {
    name: 'Some Truck',
    status: 'NOT_HERE'
  };

  // API Routes ================
  app.get('/api/foodTruck', function(req, res) {
    res.json(truck);
  });


  // special one off routes -------------------------
  app.get('/api/cancelTruck', function(req, res) {
    truck.status = 'CANCELLED';

    res.json(truck);
  });

  app.get('/api/alertTruck', function(req, res) {
    truck.status = 'HERE';

    res.json(truck);
  })

  // catch all
  app.get('/*', function(req, res) {
    res.redirect('/');
  })
};
