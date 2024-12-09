app.controller("navbarController", [
  "$scope",
  "$modal",
  "$rootScope",
  ($scope, $modal, $rootScope) => {
    $scope.openCreatePostModal = () => {
      if (!$rootScope.userLogged) {
        return $modal.open({
          templateUrl: "view/register-modal.html",
          controller: "userModalController",
        });
      }

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

    $scope.logOut = function () {
      Swal.fire({
        title: "Deseja sair?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        reverseButtons: true,
        confirmButtonText: "Sim",
      }).then((result) => {
        if (result.isConfirmed) {
          $rootScope.userLogged = false;
          localStorage.clear();
          window.location.reload();
        }
      });
    }
  },
]);
