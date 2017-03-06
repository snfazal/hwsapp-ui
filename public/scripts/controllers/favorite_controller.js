function FavoriteController($http, $state, $scope){
  var self = this;
  var server = 'https://wineshare.herokuapp.com';

  function getFavorites(){
    $http.get(`${server}/favorites`)
      .then(function(res){
        self.allFavorites = res.data.favorites;
        $scope.$emit('gotFavorites', self.allFavorites);
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
