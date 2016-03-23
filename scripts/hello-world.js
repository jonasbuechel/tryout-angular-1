/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angular */

angularPlaygroundApp.directive('helloWorld', function() {
    return {
        template: 'this is my hello world directive :)',
        restrict: 'E' //just allow integration as html element
    };
});
