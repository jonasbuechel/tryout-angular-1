/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angularPlaygroundApp */

/* add a controller */
angularPlaygroundApp.controller('todoCtrl', function($scope) {

    $scope.todolist = [];
    $scope.newTask = {};

    $scope.saveTask = function() {
        $scope.todolist.push(
            {
                name: $scope.newTask.name || null,
                completed: $scope.newTask.state || false
            }
        );
    };
});

/* add directive */
angularPlaygroundApp.directive('todoList', function() {
    
    return {
        template: 'saved values: {{todolist}}',
        restrict: 'E' //just allow integration as html element
    };
});
