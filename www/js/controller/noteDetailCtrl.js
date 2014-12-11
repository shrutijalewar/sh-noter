(function(){
  'use strict';

  angular.module('starter')


  .controller('NoteDetailCtrl', function($scope, $stateParams, Note){
    $scope.note = Note.findOne($stateParams.noteId).then(function(response){
      console.log('inside findOne');
      console.log(response.data);
      $scope.note = response.data;
    });

    function success(b64){
      console.log(b64);
      Note.upload($stateParams.noteId, b64).then(function(response){
        console.log('image uploaded successfully');
        }, function(response){
            console.log('Error During Upload');
        });
    }

    function error(msg){
      console.log(msg);
    }

    $scope.snap = function(){
      console.log('takephoto');
      var options = {
        quality: 40,
        destinationType: Camera.DestinationType.DATA_URL
      };
      navigator.camera.getPicture(success, error, options);
    };

    $scope.choose = function(){
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      };
      navigator.camera.getPicture(success, error, options);
    };



  });
})();
