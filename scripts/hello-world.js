'use strict';
/*jslint browser: true*/
/*global angular */

angular.module('todoListApp')
    .directive('helloWorld', function() {
        return {
            template: 'this is my hello world directive :)',
            restrict: 'E' //just allow integration as html element
        };
    });
