angular.module('starter', ['ionic', 'starter.services'])

.run(function($ionicPlatform){
'use strict';
  $ionicPlatform.ready(function(){
    if(window.cordova && window.cordova.plugins.Keyboard){
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar){
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
'use strict';
  $stateProvider

    .state('tab',{
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tab.dash',{
      url: '/dash',
      views: {
        'tab-dash':{
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('tab.friends',{
      url: '/friends',
      views: {
        'tab-friends':{
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail',{
      url: '/friend/:friendId',
      views: {
        'tab-friends':{
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account',{
      url: '/account',
      views: {
        'tab-account':{
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/tab/dash');
});
