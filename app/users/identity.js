angular.module('socialNetwork.users.identity', [])
    .factory('identity', [
        '$http',
        'BASE_URL',
        function ($http, BASE_URL) {

            var accessToken = '9Q5d0l-G_tabDpA3SZYiDy4XHLjoEPxnTHWmVB0Q6K6naN3gSHLiYc4i1SNyxqfqgK01p4hYwLQnOkcG_hnMOqJ64n6boxaunuDkjJn4vVsb2WKWvLT6KhcGQovJiJHHUj948sSoxL92kE_1n92lQjSJXnGXiqtmsvU5JZgaY0RkiEUhAOKOLGyatMSS8b4I03ch6rQsjmsTCTcD7X7rXi_yxGERgDSRa5e849Uk8fbgSpb0JADKHAtU4CsqufuwknW5v38-7puhvwJX3MrHNcdyQ7V78qo0tIspqs5M2tHpTdKn8_ErttsK2rExPOco7hEzDid2KdNVeMDt09DWYHn9652GTkGhketbCOSR47WE4jKhk6sBJcAKvo3uohPwhboGwpxVckvQ__rIyvvtWnzxuA5Rtq09NfisGrUwDhoAVTqLYD6EW074kTzuRxpATzp5l-TrIymPR94H1FvcfjPPdmjEIRXZD7jtF5PRHlKNIQVY2CSmOlnLiM99uXq7';

            $http.defaults.headers.common.Authorization =
                'Bearer ' + accessToken;

            var currentUser = $http.get(BASE_URL + 'me')
                .then(function (response) {
                    console.log(response.data);
                });

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