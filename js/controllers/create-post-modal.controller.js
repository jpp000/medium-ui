app.controller("createPostModalController", [
  "$scope",
  "$modalInstance",
  "PostService",
  function ($scope, $modalInstance, PostService) {
    $scope.post = {
      title: "",
      content: "",
    };

    $scope.submit = function () {
      $scope.posts = PostService.getPosts();
      Object.assign($scope.post, {
        id: $scope.posts[$scope.posts.length - 1].id + 1,
        userName: "Post User",
        date: "Feb 10, 2024",
        likes: 0,
        isLikedByUser: false,
      });

      PostService.createPost($scope.post);

      $scope.cancel();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss("cancel");
    };
  },
]);
