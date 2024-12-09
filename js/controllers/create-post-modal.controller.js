app.controller("createPostModalController", [
  "$scope",
  "$modalInstance",
  "postService",
  function ($scope, $modalInstance, postService) {
    $scope.post = {
      title: "",
      content: "",
    };

    $scope.submit = function () {
      postService.createPost($scope.post);

      window.location.reload();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss("cancel");
    };
  },
]);
