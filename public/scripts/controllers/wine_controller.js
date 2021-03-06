function WineController($http, $state, $scope){
  var self = this;
  var server = 'https://wineshare.herokuapp.com';

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
    for(var i = 0; i < self.allWines.length; i++){
      for(var j= 0; j < $scope.allFavorites.length; j++){
        if (self.allWines[i].id == $scope.allFavorites[j].id ){
          self.allWines[i].isFavorite = true;
        }
      }
    }
  }
  self.compareFavorites = compareFavorites;

  function addFav(fav){
    $http.post(`${server}/favorites/`, {wine: fav})
      .then(function(res){
        $state.go('view_favorites');
      })
  }

  self.addFav = addFav;

}
