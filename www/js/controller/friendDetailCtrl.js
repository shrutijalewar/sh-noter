(function(){
  'use strict';

  angular.module('starter')


  .controller('FriendDetailCtrl', function($scope, $stateParams, Friends){
    $scope.friend = Friends.get($stateParams.friendId);
  });



})();
