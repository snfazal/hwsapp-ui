function AuthController($http, $state, $scope, $rootScope, AuthTokenFactory){
  var self = this;
  var server = 'http://localhost:3000';

  self.test = "hello";

  function signup(userPass) {
    $http.post(`${server}/users`, { user: userPass } )
      .then(function(response) {
        $state.go('login');
      });
  }
  self.signup = signup;

  function login(user) {
    $http.post(`${server}/users/login`,
    { user: user} )
    .then(function(res){
      console.log(res.data);
      AuthTokenFactory.setToken(res.data.token)

      $scope.$emit('userLoggedIn', res.data.user);
      $rootScope.$emit('fetchData', res.data.user);
      $state.go('index');
    });
  }

  self.login = login;

  function logout() {
    AuthTokenFactory.setToken()

    $scope.$emit('userLoggedOut');
    $state.go('index');
  }

  self.logout = logout;

}
