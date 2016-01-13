angular.module("todoListApp",[])

.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;
  $scope.learningNgChange = function() {
    console.log("An input changed");
  };


  $scope.todos = [
    {"name": "clean the house"},
    {"name": "water the dog"},
    {"name": "feed the lawn"},
    {"name": "pay dem bills"},
    {"name": "run"},
    {"name": "swim"}
  ]

 })

 .service('dataService', function() {
    this.helloConsole = function(){
      console.log('This is the hello console service!');
    }
 });






// })
//
// .controller('coolCtrl', function($scope) {
//   $scope.whoAmI = function() {
//       console.log("hello there, this is the coolCtrl function.");
//   };
//
//   $scope.helloWorld = function() {
//     console.log("This is not the main ctrl!");
//  };
// })

 // .controller('imASibling', function($scope) {
 //    $scope.foobar = 1234;

    // do other cool stuff!
