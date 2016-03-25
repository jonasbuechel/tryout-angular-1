/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angularPlaygroundApp */

/* add a controller */
angularPlaygroundApp.controller('todoCtrl', function($scope) {

    $scope.todolist = [];
    $scope.newTask = {};

    //Add some testData
    $scope.todolist.push({name: 'finish angular course'});
    $scope.todolist.push({name: 'by milk', completed: true});

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
});

/* add directive */
angularPlaygroundApp.directive('todoList', function() {

    return {
        template: 'saved values: {{todolist}}',
        restrict: 'E' //just allow integration as html element
    };
});
