'use strict';

// Services allow you to create functions that can be used by multiple controllers.
// By using 'dependency injection', a service can be required by a controller, which makes its methods available to that controllers
// Dependency injection is how angular makes the same code available to multiple parts of the program
// As long as controllers define the service as a dependency, multiple controllers can use one service.
// The service that needs to be used in a controller is the second parameter, as 'dataService' in this controller:
// .controller('mainCtrl', function($scope, dataService) {
//   $scope.addTodo = function() {
//     var todo = {name: "This is a new todo."};
//     $scope.todos.unshift(todo);
//   };

// You can see in the 'main.js' file how the "getTodos" from the dataService is used within that controller.

angular.module('todoListApp')

.service('dataService', function($http) {
  // 'this.helloWorld' makes it available as a method of the 'dataService' service
  // This method of the service was an example from the video
  this.helloWorld = function() {
    console.log("This is the data service's method!!");
  };


// This is a method of dataService that gets data, in this case from our own json.
// $http is how you use the http provider, which is used to handle all http requests.
// $http uses XMLHttpRequest or JSONP

// This is a built in method (provider) to angular that makes getting data easy.
// More info on data calls:  https://docs.angularjs.org/api/ng/service/$http
// callback function happens when a successful response is received
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  };

  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been deleted!")
    // other logic
  };

  // "filtered todos" from main.js is passed into this function from main.js
  this.saveTodos = function(todo) {
    console.log(todo.length + " todos have been saved!");
    // other logic...
  };

});
