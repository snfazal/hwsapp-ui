function FavoriteController($http, $state, $scope){
  var self = this;
  var server = 'http://localhost:3000';

  function getFavorites(){
    $http.get(`${server}/favorites`)
      .then(function(res){
        self.allFavorites = res.data.favorites;
      })
  }
  getFavorites();
  self.getFavorites = getFavorites;

  function showFav(fav){
    self.nowShowing = fav;
    $scope.$emit('nowShowing', self.nowShowing);
    $state.go('show_wine');
  }
  self.showFav = showFav;

  function deleteFav(fav){
    $http.delete(`${server}/favorites/${fav.id}`)
      .then(function(res){
        $state.reload();
      })
  }
  self.deleteFav = deleteFav;

}
