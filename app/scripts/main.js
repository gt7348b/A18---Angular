(function(){

  angular.module('TranspoData', ['ngRoute'])

  .constant ({

    'Url': 'http://tiy-atl-fe-server.herokuapp.com/collections/transpodata/'

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
