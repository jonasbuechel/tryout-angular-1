/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angular */

/* create angular module */
var todoListApp = angular.module('todoListApp', []);

/* add a controller */
todoListApp.controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        var element = document.createElement('span');
        element.innerHTML = ' :) ';
        console.log(document.querySelector('h1').appendChild(element));
    };
});
