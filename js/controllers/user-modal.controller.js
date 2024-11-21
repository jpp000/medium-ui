app.controller("userModalController", function ($scope, $modalInstance) {
  $scope.user = {
    name: "",
    email: "",
    password: "",
  };

  $scope.register = function () {
    console.log("Register ", $scope.user);
  };

  $scope.login = function () {
    console.log("Login feito ", $scope.user)
  }
 
  $scope.cancel = function () {
    $modalInstance.dismiss("cancel");
  };
});
