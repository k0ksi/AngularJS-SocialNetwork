angular.module('socialNetwork.newsFeed', [
        'socialNetwork.newsFeed.feed'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        var routeChecks = {
            authenticated: ['$q', 'authentication', function ($q, authentication) {
                if(authentication.isAuthenticated()) {
                    return $q.when(true);
                }

                return $q.reject('Unauthorized access!');
            }]
        };

        $routeProvider.when('/newsFeed', {
            templateUrl: 'app/news-feed/news-feed.html',
            controller: 'NewsFeedController',
            resolve: routeChecks.authenticated
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