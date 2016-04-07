angular.module('socialNetwork.newsFeed', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newsFeed', {
            templateUrl: 'app/news-feed/news-feed.html',
            controller: 'NewsFeedController'
        })
    }])
    .controller('NewsFeedController', [
        '$scope',
        function ($scope) {

        }
    ]);