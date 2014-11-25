(function(){

  angular.module('TranspoData')
  .controller('IndividualController',
    ['$scope', '$routeParams','$http', '$location', '$firebase','DATA_URL',
      function($scope, $routeParams, $http, $location, $firebase, DATA_URL){

    //console.log($routeParams);

    $http.get(DATA_URL + $routeParams.id).success( function(data){

      console.log(data);
      $scope.tdata = data;

    });

    $scope.editTdata = function(){

      console.log("hi");

      $http.post(Url, $scope.tdata).success (function(data){
        console.log(data);
        $location.path('/');

      });

    };

    $scope.delete = function(e){


      $location.path('/');

    }

  }]);


}());
