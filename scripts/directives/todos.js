angular.module('todoListApp')    // No second parameter this time, since we want Angular to look for the app, but not create a new module.
.directive('todos', function() {
   return {
           templateUrl: 'templates/todos.html',
           controller: 'mainCtrl',
           replace: true
       }
   })

  // templateUrl specifies the file used for the main angular html body
  // This is the inserted into the html file (index.html) with tags:  <todo></todo>
  // "controller" key is a better way to specify the controller for a directive (vs. 'ng-controller' and putting it in a tag)
  // This makes 'mainCtrl' the controller for <todos></todos>
  // replace key to 'true' just gets rid fo the <todos> tags, while still inserting the html into the page.



// introductory directive from video (not in final app)

// .directive('helloWorld', function(){                // first parameter is directive name
//   return {                                          // second param. is callback function that returns an object.  This is the directive.
//     template: "This is the hello world directive",   // template is what happens
//     restrict: "E"                                   // This would restrict the element to only be used as an ELEMENT (example 1 below)
//   };
// });

// 1.  The directive can be injected in the html template by using it as a tag:
// <hello-world></hello-world>

// 2  The directive can also be injected by being an attribute of a tag
// <div hello-world></div>
