angular
  .module('myApp')
  .service('tweets', ['$http', '$q', function ($http, $q) {
    var list = function () {
      return $http
        .get('http://localhost:3000/api/tweet')
        .then(function (response) {
          return response.data
        })
    }

    var send = function (tweet) {
      var deferred = $q.defer()

      setTimeout(function () {
        deferred.resolve(tweet)
      }, 1000)

      return deferred.promise
    }

    return {
      list: list,
      send: send
    }
  }])
