(function(){

  angular.module('TranspoData')
  .controller('AddController', ['$scope', '$http', '$location','Url', function($scope, $http, $location, Url){

    $scope.tdata = {};

    console.log($scope.tdata);
    $scope.addTdata = function(){

      $http.post(Url, $scope.tdata).success (function(data){
        console.log(data);
        $location.path('/');

      });

    }

  }]);


}());
