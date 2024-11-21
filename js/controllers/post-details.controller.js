app.controller("PostDetailsController", [
  "$scope",
  "$stateParams",
  "PostService",
  function ($scope, $stateParams, PostService) {
    const postId = parseInt($stateParams.postId, 10);

    console.log(postId);

    const post = PostService.getPostById(postId);

    if (!post) {
      console.log("Post nao encontrado");
    }

    $scope.post = post;
  },
]);
