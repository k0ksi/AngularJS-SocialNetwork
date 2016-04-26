'use strict';

// Declare app level module which depends on views, and components
angular.module('socialNetwork', [
      'ngRoute',
      'ngCookies',
      'socialNetwork.common',
      'socialNetwork.home',
      'socialNetwork.newsFeed',
      'socialNetwork.users.identity'
    ]).
    config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
        $routeProvider.otherwise({redirectTo: '/'});

        $httpProvider.interceptors.push(function () {
            return {
                'response': function (response) {
                    return response;
                }
            }
        });
    }])
    .run('$rootScope', '$location', 'authentication', [function ($rootScope, $location, authentication) {
        $rootScope.$on('$routeChangeError', function (ev, current, previous, rejection) {
            if(rejection == 'Unauthorized Access') {
                $location.path('/');
            }
        });

        authentication.refreshCookie();
    }])
    .constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api/');