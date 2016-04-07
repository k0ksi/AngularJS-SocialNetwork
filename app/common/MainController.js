angular.module('socialNetwork.common', [
        'socialNetwork.users.identity'
    ])
    .controller('MainController', [
        '$scope',
        'identity',
        function ($scope, identity) {
            $scope.isAuthenticated = identity.isAuthenticated();
        }]);