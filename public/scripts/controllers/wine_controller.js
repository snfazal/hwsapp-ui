function WineController($http, $state,  AuthTokenFactory){
  var self = this;
  var server = 'http://localhost:3000';

  function createWine(wine){
      console.log(wine);
      $http.post(`${server}/wines`, {wine: wine})
      .then(function(res){
        console.log("hello");
      });

  }

  self.createWine = createWine;


}
