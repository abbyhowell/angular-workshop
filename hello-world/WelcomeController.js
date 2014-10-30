// initialize the app
angular.module('myFirstAngularApp', []);

// main controller
angular.module('myFirstAngularApp').controller('WelcomeCtrl', function($scope) {
    'use strict';

    $scope.person = {name: 'Dan'};
});
