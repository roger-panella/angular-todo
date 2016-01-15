'use strict';

angular.module('todoListApp')

// This is how to write an angular controller
// The first parameter is the name of the controllers
// The second parameter is an anonymous callback function
// Typically, the function takes one parameter:  the $scope variable
// $scope is an area of  operation for the controllers
//    (controller only works in the part of the application you allow it to)
.controller('mainCtrl', function($scope, dataService) {
  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo);
  };

  // Hello World example of controllerfunction in the mainCtrl - (no longer in the final app)

  $scope.helloWorld = function() {
    console.log("Hello There.  This is the hello world controller function")
  };

// has to be injected into the template.  For example:
// puts the mainCtrol scope within the div. (Anything in the div can use the controller's functions)
// <div ng-controller="mainCtrl">
// The helloWorld controller function is injected through the ng-click tag.  So, clicking on save runs the function.
//   <a href="" ng-click="helloWorld()">Save</a>
// </div>

// Controllers can be used in an html template in two ways:
//   1 - Adding the ng-controller tag to an element (like above)
//   2 - Declaring the controller in a directive (Such as in the todos.js file in the final version of the app)

  $scope.helloWorld = dataService.helloWorld;

  dataService.getTodos(function(response) {
      console.log(response.data);
      $scope.todos = response.data;
    });

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo) {
      if(todo.edited){
        return todo;
      };
    })
    dataService.saveTodos(filteredTodos);
  };
})
