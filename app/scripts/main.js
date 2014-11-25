(function(){

  angular.module('TranspoData', ['ngRoute', 'firebase'])

  .constant ({

    'DATA_URL': 'https://tdata.firebaseio.com/'

  })

  .config(function($routeProvider){

    $routeProvider.when('/', {
      templateUrl: 'templates/home-template.html',
      controller: 'MainController'
    });

    $routeProvider.when('/add', {
      templateUrl: 'templates/add-template.html',
      controller: 'AddController'
    });

    $routeProvider.when('/individual/:id', {
      templateUrl: 'templates/individual_template.html',
      controller: 'IndividualController'
    });

    $routeProvider.otherwise({
      templateUrl: 'templates/other-template.html',
      controller: 'OtherController'
    });

  })






}());
