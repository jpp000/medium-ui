app.controller("postDetailsController", [
  "$rootScope",
  "$scope",
  "$stateParams",
  "postService",
  "userService",
  function ($rootScope, $scope, $stateParams, postService, userService) {
    $scope.isUserLoggedIn = $rootScope.userLogged;
    $scope.post = {};

    const postId = parseInt($stateParams.postId);

    postService.getPostById(postId).then((res) => {
      $scope.post = res.data.data;
    });

    $scope.likePost = function (post) {
      if (!post.is_liked) {
        postService.likePost(post.id).then(() => {
          window.location.reload();
        });
      }
      $scope.dislikePost(post.id);
    };

    $scope.dislikePost = function (postId) {
      postService.dislikePost(postId).then(() => {
        window.location.reload();
      });
    };
  },
]);
