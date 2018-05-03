angular
  .module('myApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/templates/list.tpl.html',
        controller: 'ListController'
      })
      .when('/tweet', {
        template: '<my-app-tweet-page></my-app-tweet-page>'
      })
      .otherwise({redirectTo: '/'})
  }])

window.myAppContext.bindToAngular(angular, 'myApp')

angular
  .element(document)
  .ready(function () {
    angular.bootstrap(document, ['myApp'])
  })
