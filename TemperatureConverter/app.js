var app = angular.module('myApp', []);

app.factory("TemperaturaService", function () {

  var TemperaturaService = {};

  TemperaturaService.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  TemperaturaService.celsiusToFahrenheit = function(celsius) {
    answer = parseInt(celsius) * 1.8 + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  return TemperaturaService;

});

app.controller('TemperaturaController', ["TemperaturaService", function(TemperaturaService) {

  this.TemperaturaService = TemperaturaService;
  this.celsius = 32.0;

}]);
