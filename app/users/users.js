angular.module('myApp.users', [])
    .controller('UsersController', [
        '$scope', function ($scope) {
            $scope.hello = 'Zdrasti!';
        }
    ]);