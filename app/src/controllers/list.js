angular
  .module('myApp')
  .controller('ListController', ['$scope', 'tweets', '$location', function ($scope, tweets, $location) {
    $scope.list = []
    tweets.list().then(function (list) {
      $scope.list = list
    })

    $scope.goToNewTweet = function () {
      $location.path('/tweet')
    }
  }])
