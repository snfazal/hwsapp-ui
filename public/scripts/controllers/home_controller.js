function HomeController($scope, $http) {
  var self = this;

 // user login
  $scope.$on('userLoggedIn', function(event, data){
    self.currentUser = data;
    console.log(data);
  });

// user log out
  $scope.$on('userLoggedOut', function(event, data) {
    self.currentUser = null;
  });
}
