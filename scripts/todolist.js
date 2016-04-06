/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angularPlaygroundApp */

/* add a controller */
angularPlaygroundApp.controller('todoCtrl', function($scope, dataService) {

    //Add data from service
    dataService.getTodos(function(response) {
        $scope.todolist = response.data;
    });

    //Declare newTask
    $scope.newTask = {};

    $scope.saveTask = function() {

        if ($scope.newTask.name) {
            $scope.todolist.push(
                {
                    name: $scope.newTask.name || null,
                    completed: $scope.newTask.completed || false
                }
            );
            $scope.newTask.name = null;
        }
    };

    //Access service
    $scope.helloConsole = dataService.helloConsole;

});

/* add directive */
angularPlaygroundApp.directive('todoList', function() {

    return {
        template: 'saved values: {{todolist}}',
        restrict: 'E' //just allow integration as html element
    };
});

/* Service to get Mockdata */
angularPlaygroundApp.service('dataService', function($http) {
    this.helloConsole = function() {
        console.log('This is the hello console service!');
    };

    this.getTodos = function(callback) {
        $http.get('mock/mockdata.json').then(callback);
    };

});
