/******************************
* Author: Karina McGourty

* Assignment: BScH Mobile Development, Digital Skills Academy

* Student ID: STU-00001261 * Date : 2017/04/10

* Ref: 
******************************/

var todoApp = angular.module("todoApp", []);

todoApp.controller("todoController", function($scope){
    // Empty array for the tasks/todos
    $scope.tasks = [];
    // Priority options
    $scope.newPriorityLevel = [
            { level: "Urgent" },
            { level: "High" },
            { level: "Medium" },
            { level: "Low" }
        ];
    
    // Local Storage - Get tasks that may already be saved in storage
    var localData = localStorage['myLocalTasks'];
    
    if (localData !== undefined){
        $scope.tasks = JSON.parse(localData);
    }
    
    // Add the new task/todo items
    $scope.todoAdd = function() {
        $scope.tasks.push({'todo':$scope.newTodo, 'description':$scope.newDesc, 'date':$scope.newDate, 'priority':$scope.newPriority.level, 'status':false});
        $scope.tasks;
        // Clear input
        $scope.newTodo = '';
        $scope.newDesc = '';
        $scope.newDate = '';
        
        // Local Storage for new tasks added - Convert to a String
        localStorage['myLocalTasks'] = JSON.stringify($scope.tasks);
    };
    
    // Delete a task/todo item
    $scope.deleteTask = function(deleteTodo){
        $scope.tasks.splice($scope.tasks.indexOf(deleteTodo),1);
        // Update local storage with the deleted tasks
        localStorage['myLocalTasks'] = JSON.stringify($scope.tasks);
    };
    
    // Save the changed status of a task to local storage
    $scope.changeStatus = function(x) {
        localStorage['myLocalTasks'] = JSON.stringify($scope.tasks);
    };
    
    // How many tasks left
    $scope.todoTotal = function(){
        return $scope.tasks.length;
    };
});

