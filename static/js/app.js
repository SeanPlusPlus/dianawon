'use strict';

var dianawon = angular.module('dianawon', ['ngRoute', 'dianawon.controllers', 'dianawon.services']);

dianawon.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'MainCtrl'
      }).
      when('/portfolio/:item', {
        templateUrl: 'partials/item.html',
        controller: 'ItemCtrl'
      });
}]);

angular.module('dianawon.controllers', []).
  controller('MainCtrl', ['$scope', 'dianawonService', function ($scope, dianawonService) {
    var request = {'method': 'get', 'resource': 'items.json'};
    dianawonService.async(request).then(function(response) {
      $scope.items = response.data;
    });
    $scope.email = 'dianaswon' + '@' + 'gmail.com';
  }]).

  controller('ItemCtrl', ['$scope', 'dianawonService', '$routeParams', 
      function ($scope, dianawonService, $routeParams) {

    var request = {'method': 'get', 'resource': 'items.json'};
    dianawonService.async(request).then(function(response) {
      var items = response.data;
      for (var i = 0, j = items.length; i < j; i++) {
        if (items[i].url === $routeParams.item) {
          $scope.item = items[i];
          return;
        }
      }
    });
  }]);
