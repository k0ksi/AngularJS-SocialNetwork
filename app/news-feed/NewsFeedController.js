angular.module('socialNetwork.newsFeed', [
        'socialNetwork.newsFeed.feed'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newsFeed', {
            templateUrl: 'app/news-feed/news-feed.html',
            controller: 'NewsFeedController'
        })
    }])
    .controller('NewsFeedController', [
        '$scope',
        'feed',
        function ($scope, feed) {

            feed.latest()
                .then(function (latestFeed) {
                    console.log(latestFeed);
                     $scope.latestFeed = latestFeed;
                });
    }]);