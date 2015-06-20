'use strict';

var dianawon = angular.module('dianawon', ['dianawon.controllers', 'dianawon.services']);
angular.module('dianawon.controllers', []).
  controller('MainCtrl', ['$scope', 'dianawonService', function ($scope, dianawonService) {

    // AJAX call
    var request = {'method': 'get', 'resource': 'items.json'};
    dianawonService.async(request).then(function(response) {
      $scope.items = response.data;
    });
  }]);
