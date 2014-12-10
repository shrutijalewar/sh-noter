(function(){
  'use strict';

  angular.module('starter')
  .factory('Note', ['$http','origin', function($http, origin){

    /*function count(){
      return $http.get(origin + '/notes/count');
    }*/

    function all(query){
      console.log('QQQQQQQ', query);
      return $http.get(origin + '/notes?limit=' + query.limit + '&offset=' + query.offset + '&tag=' + query.tag);
    }

    function findOne(id){
      return $http.get(origin + '/notes/'+ id);
    }

    return{all:all, findOne:findOne};
  }]);
})();
