angular
  .module('myApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/templates/list.tpl.html',
        controller: 'ListController'
      })
      .when('/tweet', {
        templateUrl: 'app/templates/tweet.tpl.html',
        controller: 'TweetController'
      })
      .otherwise({redirectTo: '/'})
  }])

window.myAppContext.bindToAngular(angular, 'myApp')

angular
  .element(document)
  .ready(function () {
    angular.bootstrap(document, ['myApp'])
  })
