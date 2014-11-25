(function(){

  angular.module('TranspoData')
  .controller('AddController', ['$scope', '$http', '$location','$firebase','DATA_URL', function($scope, $http, $location, $firebase, DATA_URL){

    $scope.tdata = {};

    console.log($scope.tdata);
    $scope.addTdata = function(){

      $http.post(DATA_URL, $scope.tdata).success (function(data){
        console.log(data);
        $location.path('/');

      });

    }

  }]);


}());
