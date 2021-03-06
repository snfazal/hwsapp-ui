angular.module('wineAngularApp', ['ui.router'])
.config(WineRouter)
.config(authInterceptor)

function authInterceptor($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor')
}

function WineRouter($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: '/partials/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/partials/login.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: '/partials/signup.html'
      })
      .state('create_wine', {
        url: '/create_wine',
        templateUrl: '/partials/create_wine.html'
      })
      .state('show_wine', {
        url: '/show_wine',
        templateUrl: '/partials/show_wine.html'
      })
      .state('create_post', {
        url: '/create_post',
        templateUrl: '/partials/create_post.html'
      })
      .state('show_post', {
        url: '/show_post',
        templateUrl: '/partials/show_post.html'
      })
      .state('view_favorites', {
        url: '/view_favorites',
        templateUrl: '/partials/view_favorites.html'
      })
}
