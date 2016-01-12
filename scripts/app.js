angular.module("todoListApp",[])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('hello there.  This is the helloWorld controller function in the main controller');
  };
});
