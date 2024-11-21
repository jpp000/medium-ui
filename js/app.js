var app = angular.module("mediumApp", ["ui.bootstrap"]);

app.config(function ($provide, $httpProvider) {
  $httpProvider.interceptors.push(function () {
    return {
      request: function (config) {
        console.log("Tentando carregar:", config.url);
        return config;
      },
    };
  });
});

app.controller("MainController", function ($scope, $uibModal) {
  $scope.posts = [
    {
      id: 1,
      userName: "User 1",
      date: "Feb 4, 2024",
      title: "Title 1",
      content: "Content 1",
      likes: 10,
      comments: 20,
      isLikedByUser: false,
    },
    {
      id: 2,
      userName: "User 2",
      date: "Feb 5, 2024",
      title: "Title 2",
      content: "Content 2",
      likes: 5,
      comments: 15,
      isLikedByUser: true,
    },
  ];

  $scope.openCreatePostModal = () => {
    $uibModal.open({
      templateUrl: "view/create-post-modal.html",
      controller: "createPostModalController",
    });
  };
});

