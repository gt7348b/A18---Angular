(function(){

  angular.module('TranspoData', ['ngRoute'])

  .constant ({

    'Url': 'http://tiy-atl-fe-server.herokuapp.com/collections/transpodata/'

  })

  .config(function($routeProvider){

    console.log('here');

  })




}());
