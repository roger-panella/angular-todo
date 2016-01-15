'use strict';

angular.module('todoListApp')

// This is how to write an angular controller
// The first parameter is the name of the controllers
// The second parameter is an anonymous callback function
// Typically, the function takes one parameter:  the $scope variable
// $scope is an area of  operation for the controllers
//    (controller only works in the part of the application you allow it to)

// dataService is defining that service as a dependency in the mainCtrl controllers
// Now, dataService's methods can be accessed as any other object could be.

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

// the callback function (function(response))is the callback function that happens after data is successfully returned from the request
// it gets the response from the 'then' method in the data.js file (service)
  dataService.getTodos(function(response) {
      console.log(response.data);
      $scope.todos = response.data;
    });


//  method to delete a todo (or other data)
// This would be used to delete from the database (CRUD), which isn't done here since there is no db

// $index is paramater given by angular in ng-repeats that gives you the current item number in the array being 'looped through'
  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    //The splice deletes the current todo ($index - first argument).  The second argument is how many items to delete. So, here just one todo, the one clicked on.
    $scope.todos.splice($index, 1);
  };

// Save todo.  Uses the saveTodo method from the dataService service
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo) {
      if(todo.edited){
        return todo;
      };
    })
    dataService.saveTodos(filteredTodos);
  };
})
