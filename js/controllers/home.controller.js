app.controller(
  "homeController",
  function ($rootScope, $scope, $modal, postService) {
    $scope.isUserLoggedIn = $rootScope.userLogged;
    $scope.posts = [];

    const getPosts = () => {
      postService.getPosts().then((res) => {
        $scope.posts = res.data.data.posts;
      });
    };

    getPosts();

    $scope.likePost = function (post) {
      if (!$scope.isUserLoggedIn) {
        return $modal.open({
          templateUrl: "view/register-modal.html",
          controller: "userModalController",
        });
      }

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
  }
);
