(function(){

  angular.module('TranspoData')
  .controller('MainController', ['$scope', '$http', '$location','DATA_URL', function($scope, $http, $location, DATA_URL){

    //This calls the data
    $http.get(DATA_URL).success( function(results){

      $scope.list = results;
    });

    //This takes to the edit page
    $scope.edit= function(tdata){
      console.log(tdata);
      $location.path('/individual/'+ tdata._id);
    };

  }]);


}());
