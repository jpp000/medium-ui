app.controller("homeController", function ($scope, $modal) {
  $scope.posts = [
    
  ];

  $scope.openCreatePostModal = () => {
    $modal.open({
      templateUrl: "view/create-post-modal.html",
      controller: "createPostModalController",
    });
  };
});
