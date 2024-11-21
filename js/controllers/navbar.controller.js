app.controller("NavbarController", [
  "$scope",
  "$modal",
  ($scope, $modal) => {
    $scope.openCreatePostModal = () => {
      $modal.open({
        templateUrl: "view/create-post-modal.html",
        controller: "createPostModalController",
      });
    };

    $scope.openRegisterModal = () => {
      $modal.open({
        templateUrl: "view/register-modal.html",
        controller: "userModalController",
      });
    };

    $scope.openLoginModal = () => {
      $modal.open({
        templateUrl: "view/login-modal.html",
        controller: "userModalController",
      });
    };
  },
]);
