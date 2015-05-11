'use strict';

/* Controllers */

var hhApp = angular.module('hhApiApp', ['ngRoute']);

hhApp.controller('hhController', ['$scope', '$http', function($scope, $http) {
  
  $scope.allItems = '';
  $scope.allAreas = '';
  
  $scope.getVacancies = function(text){
    console.log(text);
      $http({
            url: "https://api.hh.ru/vacancies/",
            method:"GET",
            params: {'text': text, area: "2"}
        })
         .success(function(data){
            console.log("received:");
            console.log(data);
            $scope.allItems = data.items;
         })
         .error(function(data){
            console.log("error:");
            console.log(data);
         });
  };

  $scope.getAreas = function(areaFrom){
    $http({
        url:"https://api.hh.ru/areas/" + areaFrom,
        method: "GET"
    })
    .success(function(data){
        console.log(data);
        $scope.allAreas = data;
        console.log($scope.allAreas.name);
    });
  };
}]);
