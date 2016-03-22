/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angular */

/* create angular module */
var todoListApp = angular.module('todoListApp', []);

/* add a controller */
todoListApp.controller('mainCtrl', function($scope) {
    /* FUNCTION: Hello World */
    $scope.helloWorld = function() {
        console.log('Hello  world, I\'m the main controller');
    };
    /* FUNCTION: whoAmI */
    $scope.whoAmI = function() {
        console.log('WhoAmI: I\'m the main controller');
    };
});

/* add a controller */
todoListApp.controller('parentCtrl', function($scope) {
    /* FUNCTION: Hello World */
    $scope.helloWorld = function() {
        console.log('Parent: this child has no own helloWorld function, so I allow you to use mine');
    };
    /* FUNCTION: whoAmI */
    $scope.whoAmI = function() {
        console.log('Parent: this child has no own whoAmI function, so I allow you to use mine');
    };
});

/* add a first children controller */
todoListApp.controller('child1Ctrl', function($scope) {
    /* FUNCTION: Hello World */
    $scope.helloWorld = function() {
        console.log('Hello  world, I\'m the child1 controller');
    };
});

/* add a second children controller */
todoListApp.controller('child2Ctrl', function($scope) {
    /* FUNCTION: Hello World */
    $scope.whoAmI = function() {
        console.log('WhoAmI: I\'m the child2 controller');
    };
});
