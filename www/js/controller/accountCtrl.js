(function(){
'use strict';
angular.module('starter')
.controller('AccountCtrl', function($scope){
  $scope.user = {};
  $scope.login = function(user){
    console.log('user', user);
  };
});

})();
