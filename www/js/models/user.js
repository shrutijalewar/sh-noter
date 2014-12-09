(function(){
  'use strict';

  angular.module('starter')
  .factory('User', ['$http', 'origin', function($http, origin){

    /*function register(user){
      return $http.post('/register', user);
    }*/

    function login(user){
      return $http.post(origin+ '/login', user);
    }

    function logout(){
      return $http.delete(origin+ '/logout');
    }

    return {login:login, logout:logout};
  }]);
})();
