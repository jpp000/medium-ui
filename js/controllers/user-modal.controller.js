app.controller("userModalController", [
  "$scope",
  "$modalInstance",
  "userService",
  function ($scope, $modalInstance, userService) {
    $scope.register = function () {
      userService.createUser($scope.user).then(() => {
        console.log("Usuario criado")
        $modalInstance.close();
      });
    };

    $scope.login = function () {
      userService.loginUser($scope.user)
        .then(function (resp) {
          localStorage.setItem("token", resp.data.data.token);

          $scope.user.email = "";
          $scope.user.password = "";

          window.location.reload();
        })
        .catch(function (err) {
          Swal.fire({
            title: "Dados Inválidos!",
            text: "Verifique as suas informações!",
            icon: "error",
          });
          localStorage.clear();
          $scope.user.password = "";
        });
    };

    $scope.cancel = function () {
      $modalInstance.dismiss("cancel");
    };
  },
]);
