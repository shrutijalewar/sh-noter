(function(){
  'use strict';

  angular.module('starter')

  .controller('DashCtrl', function($rootScope, $state, $scope, Note, User){
    Note.count().then(function(response){
      $scope.count = response.data.count;
    });
    $scope.logout= function(user){
      User.logout().then(function(response){
        $rootScope.rootuser = null;
        $state.go('tab.account');
      }, function(){
        $scope.user = {};
      });
    };
  });

})();
