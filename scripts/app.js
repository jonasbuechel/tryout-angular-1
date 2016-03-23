/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angular */

/* create angular module */
var angularPlaygroundApp = angular.module('angularPlaygroundApp', []);

/* add a controller */
angularPlaygroundApp.controller('parentCtrl', function($scope) {
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
angularPlaygroundApp.controller('child1Ctrl', function($scope) {
    /* FUNCTION: Hello World */
    $scope.helloWorld = function() {
        console.log('Hello  world, I\'m the child1 controller');
    };
});

/* add a second children controller */
angularPlaygroundApp.controller('child2Ctrl', function($scope) {
    /* FUNCTION: Hello World */
    $scope.whoAmI = function() {
        console.log('WhoAmI: I\'m the child2 controller');
    };
});
