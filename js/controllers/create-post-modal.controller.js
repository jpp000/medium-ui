app.controller(
  "createPostModalController",
  function ($scope, $modalInstance, $http, $rootScope) {
    console.log("aaaa")
    
    $scope.post = {
      title: "",
      content: "",
    };

    $scope.submit = function () {
      console.log("criado")
    };

    $scope.cancel = function () {
      $modalInstance.dismiss("cancel");
    };
  }
);
