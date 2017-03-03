angular.module('wineAngularApp', ['ui.router'])
.config(WineRouter)


function WineRouter($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/partials/login.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: '/partials/signup.html'
      })

}
