(function(){

  angular.module('TranspoData')
  .controller('IndividualController', ['$scope', '$routeParams','$http', '$location', 'Url', function($scope, $routeParams, $http, $location, Url){

    //console.log($routeParams);

    $http.get(Url + $routeParams.id).success( function(data){

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
            e.preventDefault();
            console.log(this);
      // Remove options
      this.options.blogs.destroy();
      $location.path('/');

    }

  }]);


}());
