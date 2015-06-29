var app = angular.module('foodTruck', ['ui.router']);

app.controller('foodTruckController', [
  '$scope', 'FoodTruckService',
  function($scope, FoodTruckService) {
    // when landing on the page, get the truck
    FoodTruckService.getTruck()
      .success(function(data) {
        $scope.truck = data;
      });

    $scope.cancelTruck = function() {
      FoodTruckService.cancelTruck()
        .success(function(data) {
          $scope.truck = data;
        });
    };

    $scope.alertTruck = function() {
      FoodTruckService.alertTruck()
        .success(function(data) {
          $scope.truck = data;
        });
    };

    $scope.resetTruck = function() {
      FoodTruckService.resetTruck()
        .success(function(data) {
          $scope.truck = data;
        });
    };
  }
]);

app.factory('FoodTruckService', [
  '$http',
  function($http) {
    return {
      getTruck: function() {
        return $http.get('/api/foodTruck');
      },
      cancelTruck: function() {
        return $http.put('/api/cancelTruck');
      },
      alertTruck: function() {
        return $http.put('/api/alertTruck');
      },
      resetTruck: function() {
        return $http.put('/api/resetTruck');
      }
    }
  }
]);
