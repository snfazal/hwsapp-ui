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
        console.log(self.allWines);
        if ($scope.allFavorites){
          self.compareFavorites();
        }
      })
  }
  self.getWines = getWines;
  getWines();

  function showWine(wine){
    self.nowShowing = wine;
    $scope.$emit('nowShowing', self.nowShowing);
    $state.go('show_wine');
  }
  self.showWine = showWine;

  function editWine(wine){
    $http.put(`${server}/wines/${wine.id}`, angular.toJson(wine))
    .then(function(res){
      self.showEdit = false;
      $state.reload()
    })
  }
  self.editWine = editWine;

  function deleteWine(wine){
    $http.delete(`${server}/wines/${wine.id}`)
    .then(function(res){
      $state.go('index')
    })
  }
  self.deleteWine = deleteWine;

  function compareFavorites(){
    console.log(self.allWines);
    console.log($scope.allFavorites);
    for(var i = 0; i < self.allWines.length; i++){
      for(var j= 0; j < $scope.allFavorites.length; j++){
        if (self.allWines[i].id == $scope.allFavorites[j].id ){
          self.allWines[i].isFavorite = true;
        }
      }
    }
  }
  self.compareFavorites = compareFavorites;
}
