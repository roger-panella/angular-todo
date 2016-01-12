angular.module("todoListApp",[])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('hello there.  This is the helloWorld controller function in the main controller');
  };
})

.controller('coolCtrl', function($scope) {
  $scope.whoAmI = function() {
      console.log("hello there, this is the coolCtrl function.");
  };

  $scope.helloWorld = function() {
    console.log("This is not the main ctrl!");
 };
})

 .controller('imASibling', function($scope) {
    $scope.foobar = 1234;

    // do other cool stuff!
 });
