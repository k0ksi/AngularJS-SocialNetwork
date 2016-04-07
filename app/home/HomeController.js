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
        function ($scope, authentication) {
        $scope.login = function (user) {
            authentication.loginUser(user)
                .then(function (loggedInUser) {
                    console.log(loggedInUser);
                    $location.path('/newsFeed');
                });
        };

        $scope.register = function (user) {
            authentication.registerUser(user)
                .then(function (registeredUser) {
                    console.log(registeredUser);
                });
        };
    }]);