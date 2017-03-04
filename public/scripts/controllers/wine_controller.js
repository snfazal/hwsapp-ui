function WineController($http, $state, $scope){
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
        self.allWines = res.data.wines;
      })
  }
  self.getWines = getWines;
  getWines();

  function showWine(wine){
    console.log(wine);
    self.nowShowing = wine;
    console.log(self.nowShowing);
    $scope.$emit('nowShowing', self.nowShowing);
    $state.go('show_wine');
  }
  self.showWine = showWine;

  function editWine(wine){
    console.log(wine);
    $http.put(`${server}/wines/${wine.id}`, angular.toJson(wine))
    .then(function(res){
      console.log(res);
      $state.go('show_wine')
    })
  }
  self.editWine = editWine;

  function deleteWine(wine){
    $http.delete(`${server}/wines/${wine.id}`)
    .then(function(res){
      console.log(res);
      $state.go('index')
    })
  }
  self.deleteWine = deleteWine;
}
