(function(){
  'use strict';

  angular.module('starter')

  .controller('NotesCtrl', function($scope, Note){
    $scope.query = {
                    limit : 100,
                    offset: 0,
                    tag: '%'
                  };
    $scope.notes = Note.all($scope.query).then(function(response){
      console.log('inside note.all');
      console.log(response.data);
      $scope.notes = response.data;

    });
  });

})();
