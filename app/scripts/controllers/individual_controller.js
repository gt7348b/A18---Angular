(function(){

  angular.module('TranspoData')
  .controller('IndividualController', ['$scope', '$routeParams','$http', 'Url', function($scope, $routeParams, $http, Url){

    console.log($routeParams);

    $http.get(Url + $routeParams.id).success( function(data){

      console.log(data);
      $scope.tdata = data;

    });

  }]);


}());
