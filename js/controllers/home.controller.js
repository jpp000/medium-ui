app.controller("homeController", function ($scope, $modal, PostService) {
  $scope.posts = PostService.getPosts();
});
