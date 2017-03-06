function PostController($http, $state, $scope){
  var self = this;
  var server = 'http://localhost:3000';

  //route creates new post from create_post
  function createPost(post){
      console.log(post);
      $http.post(`${server}/posts`, {post: post})
      .then(function(res){
        console.log(res);

        $state.go('index')
      });
  }
  self.createPost = createPost;

  function getPosts(){
    $http.get(`${server}/posts`)
    .then(function(res){
      self.allPosts = res.data.post;
    })
  }
  self.getPosts = getPosts;
  getPosts();

  function showPost(post){
    console.log(post);
    self.nowShowing = post;
    console.log(self.nowShowing);
    $scope.$emit('nowShowing', self.nowShowing);

    $state.go('show_post');
  }
  self.showPost = showPost;

  function editPost(post){
    console.log(post);
    $http.put(`${server}/posts/${post.id}`, angular.toJson(post))
    .then(function(res){
      console.log(res);
      self.showPost = false;

      $state.reload()
    })
  }
  self.editPost = editPost;

function deletePost(post){
  $http.delete(`${server}/posts/${post.id}`)
  .then(function(res){
    console.log(res);
    $state.go('index')
  })
}

self.deletePost = deletePost;
}
