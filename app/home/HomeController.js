angular.module('socialNetwork.home', [
        'socialNetwork.users.authentication'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeController'
        })
    }])
    .controller('HomeController', [
        '$scope',
        'authentication',
        function ($scope) {
        $scope.login = function (user) {
            authentication.loginUser(user);
        };

        $scope.register = function (user) {
            authentication.registerUser(user)
                .then(function (registeredUser) {
                    console.log(registeredUser);
                });
        };
    }]);