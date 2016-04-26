angular.module('socialNetwork.users.identity', [])
    .factory('identity', [
        '$http',
        '$q',
        'BASE_URL',
        function ($http, $q, BASE_URL) {

            var deferred = $q.defer();

            var currentUser = undefined;

            return {
                getCurrentUser: function () {
                    if(currentUser) {
                        return $q.when(currentUser);
                    } else {
                        return deferred.promise;
                    }
                },
                removeUserProfile: function () {
                    currentUser = undefined;
                },
                requestUserProfile: function () {
                    var userProfileDeferred = $q.defer();

                    $http.get(BASE_URL + 'me')
                        .then(function (response) {
                            currentUser = response.data;
                            userProfileDeferred.resolve(currentUser);
                        });

                    return userProfileDeferred.promise;
                }
            };
        }]);