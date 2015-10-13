var app = angular.module("myApp", []);

app.factory("LogService", function () {
  var LogService = (function () {
    return {
      log: function (level, message) {
        var andSoItBegins = (new Date()); //.getTime();

        switch (level) {
          case 0:
            console.warn(andSoItBegins + " - " + message);
            break;

          case 1:
            console.error(andSoItBegins + " - " + message);
            break;
        }
      }
    };
  })();

  return LogService;
});

app.controller("LogController", ["LogService", function (LogService) {
  this.LogService = LogService;
  this.level      = 0;
  this.message    = "";

  this.adicionaMensagem = function () {
    this.LogService.log(parseInt(this.level), this.message);
  };
}]);
