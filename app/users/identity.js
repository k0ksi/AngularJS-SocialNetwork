angular.module('socialNetwork.users.identity')
    .factory('identity', [function () {

        var accessToken = '-afJSJt3RlbNoNMvWBPzdkAlLWqlwJOAK8boQ1qMjoQkzrVT-y…ZjNzys2VL2KBmhRyXkaZrNkUr_HnAzpWoBUaqmvU4zNvpUq-Y';

        var username = 'gosho123';

        return {
            getCurrentUser: function () {
                return {
                    username: username
                }
            },
            isAuthenticated: function () {
                return true;
            }
        };
    }]);