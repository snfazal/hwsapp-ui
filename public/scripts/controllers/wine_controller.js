function WineController($http, $state,  AuthTokenFactory){
  var self = this;
  var server = 'http://localhost:3000';

  function createWine(wine){
      console.log(wine);
      $http.post(`${server}/wines`, {wine: wine})
      .then(function(res){
        console.log(res);
        $state.go('index')
      });
  }
  self.createWine = createWine;

  function getWines(){
    $http.get(`${server}/wines`)
      .then(function(res){
        console.log(res);
        self.allWines = res.data.wines;

        $state.go('index')
      })
  }
  self.getWines = getWines;
  getWines();
}
