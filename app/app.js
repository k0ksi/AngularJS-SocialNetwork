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
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }])
    .run('authentication', [function (authentication) {
        authentication.refreshCookie();
    }])
    .constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api/');