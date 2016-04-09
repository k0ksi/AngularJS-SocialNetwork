angular.module('socialNetwork.users.identity', [])
    .factory('identity', [
        '$http',
        '$q',
        'BASE_URL',
        function ($http, $q, BASE_URL) {

            var deferred = $q.defer();

            var currentUser = undefined;

            var accessToken = 'qatiyUtQqFLEvoxOLge0K-hJXCFlPIec6ZWQYDA269qvS0Tem9LZCV2X3_lTpwm5PJK66WmZJdHRDoSLRCfJzc9LrPIOdP_05UHvk1FIda-uCnPfF1nN3hvKIWzCoU2HRBZot4TRc0NxjxiBB2BfiQWLQutcGiAjNVLQxNYWcQ0A9owlT5Fu6uKKwPA-JwwaA5QxbxRmMOirlVIwL2L8tKoWwRtZTlS3R1qhHWvYCfJWTviG9f9dsv1zKKBrBE0QI8ezsQGk6WsyhtfBD8TjOHCwAagQII1Z1JdNBJXRwcl8jHL9j95kqHv6a7-OTmMi6qY1CNx4OLpqNLoxVQaETbEn5coNM_YEUoNCDDZLBLv1iFjIYfAXCvUy0qPieCFUPLkIIStRe_hpu7EQbAUsLKaHGUWCh7-cW4Nx66gPRImwyW308AJRM_Cb5L9j3s93KHBG2Os38JlptCqG6K6nHcznoSVkJhHhZrZMJa9cvDJlAzb19oF3i4f2kQT7mSmS';

            $http.defaults.headers.common.Authorization =
                'Bearer ' + accessToken;

            $http.get(BASE_URL + 'me')
                .then(function (response) {
                    currentUser = response.data;
                    deferred.resolve(currentUser);
                });

            return {
                getCurrentUser: function () {
                    if(currentUser) {
                        return $q.when(currentUser);
                    } else {
                        return deferred.promise;
                    }
                },
                isAuthenticated: function () {
                    return true;
                }
            };
        }]);