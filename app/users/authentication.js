'use strict';

angular.module('socialNetwork.users.authentication', [])
    .factory('authentication', [
        '$http',
        '$cookies',
        '$q',
        '$location',
        'identity',
        'BASE_URL',
        function($http, $cookies, $q, $location, identity, BASE_URL) {
            var AUTHENTICATION_COOKIE_KEY = '!_AUTH_COOKIE';

            function preserveUserData(data) {
                var accessToken = data.access_token;
                $http.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
                $cookies.put('AUTHENTICATION_COOKIE_VALUE', accessToken);
            }

            function registerUser(user) {
                var deferred = $q.defer();

                $http.post(BASE_URL + '/Users/Register', user)
                    .then(function (response) {
                        preserveUserData(response.data);

                        identity.requestUserProfile()
                            .then(function () {
                                deferred.resolve(response.data);
                            });
                    }, function (error) {

                    });

                return deferred.promise;
            }

            function loginUser(user) {
                var deferred = $q.defer();

                $http.post(BASE_URL + '/Users/Login', user)
                    .then(function (response) {
                        preserveUserData(response.data);

                        identity.requestUserProfile()
                            .then(function () {
                                deferred.resolve(response.data);
                            });
                    }, function (error) {

                    });

                return deferred.promise;
            }

            function isAuthenticated() {
                return !!$cookies.get(AUTHENTICATION_COOKIE_KEY);
            }

            function logout() {
                $cookies.remove(AUTHENTICATION_COOKIE_KEY);
                $http.defaults.headers.common.Authorization = undefined;
                identity.removeUserProfile();
                $location.path('/');
            }
            
            function refreshCookie() {
                if(isAuthenticated()) {
                    $http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get(AUTHENTICATION_COOKIE_KEY);
                    identity.requestUserProfile();
                }
            }

            return {
                isAuthenticated: isAuthenticated,
                registerUser: registerUser,
                loginUser: loginUser,
                refreshCookie: refreshCookie,
                logout: logout
            }
    }]);