(function(){

  angular.module('TranspoData')
  .controller('MainController', ['$scope', '$http', '$location','Url', function($scope, $http, $location, Url){

    //This calls the data
    $http.get(Url).success( function(results){

      $scope.list = results;
    });

    //This takes to the edit page
    $scope.edit= function(tdata){
      console.log(tdata);
      $location.path('/individual/'+ tdata._id);
    };

  }]);


}());
