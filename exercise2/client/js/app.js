// initialize the app
angular.module('TaskManager', []).run(function(TaskFactory) {
    TaskFactory.init();
});

angular.module('TaskManager').constant('ServerUrl', 'http://localhost:3000/');

angular.module('TaskManager').factory('TaskFactory', function($http, ServerUrl) {
    var tasks = [];
    
    var init = function() {
        $http.get(ServerUrl + 'tasks').success(function(response) {
            // use angular.copy() to retain the original array which the controllers are bound to
            // tasks = response will overwrite the array with a new one and the controllers loose the reference
            // could also do tasks.length = 0, then push in the new items
            angular.copy(response, tasks);
        });
    };
    
    return {
        tasks: tasks,
        init: init
    };
});

angular.module('TaskManager').controller('FormCtrl', function($scope, $http, ServerUrl, TaskFactory) {
    'use strict';
    
    $scope.task = {};
    
    $http.get(ServerUrl + 'categories').success(function(response) {
        $scope.categories = response;
    });
    
    $scope.tasks = TaskFactory.tasks;

    $scope.createCategory = function(category) {
        $http.post(ServerUrl + 'categories', category).success(function(response) {
            $scope.categories.push(response);
            
            $scope.category.name = '';
            
            $scope.task.category = response.id;
        });
    };
    
    $scope.createTask = function(task) {
        $http.post(ServerUrl + 'tasks', task).success(function(response) {
            $scope.tasks.push(response);
            
            $scope.task.name = '';
            $scope.task.category = '';
        });
    };
});

angular.module('TaskManager').controller('ListCtrl', function($scope, TaskFactory) {
    'use strict';
    
    $scope.tasks = TaskFactory.tasks;
    
    $scope.completeTask = function(task) {
        task.status = 2;
    };
});