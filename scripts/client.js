var sigmanautApp = angular.module('SigmanautApp', []);

sigmanautApp.controller('SigmanautController', ['$scope', function($scope){
  console.log('Sigmanaut controller loaded');

  $scope.people = [
    {
      "firstName": "Luke",
      "lastName": "Schlangen",
      "git_username": "LukeSchlangen",
      "shoutout": "Thanks for being awesome during the angular lecture today."
    }
  ];

  $scope.newPerson = {};

  $scope.createPerson = function(){
    console.log($scope.newPerson);
    $scope.people.push(angular.copy($scope.newPerson));
  };

}]);
