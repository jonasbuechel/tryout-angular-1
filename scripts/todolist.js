/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angularPlaygroundApp */

/* add a controller */
angularPlaygroundApp.controller('todoCtrl', function($scope) {

    $scope.todolist = [];

    $scope.saveTask = function() {
        $scope.todolist.push(
            {
                name: $scope.task.name,
                completed: $scope.task.state || false
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
