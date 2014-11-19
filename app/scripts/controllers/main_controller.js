(function(){

  angular.module('TranspoData')
  .controller('MainController', ['$scope', '$http', '$location','Url', function($scope, $http, $location, Url){

    console.log('main');

    $http.get(Url).success( function(results){

      $scope.list = results;
      console.log(results);
    });

  }]);


}());
