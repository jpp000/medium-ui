var app = angular.module("mediumApp", ["ui.router", "ui.bootstrap"]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/posts");

  $stateProvider.state({
    name: "home",
    url: "/posts",
    templateUrl: "view/home.html",
    controller: "homeController",
  });

  $stateProvider.state({
    name: "post",
    url: "/posts/{postId}",
    templateUrl: "view/post-details.html",
    controller: "PostDetailsController",
  });
});
