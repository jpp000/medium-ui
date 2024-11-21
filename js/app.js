var app = angular.module("mediumApp", ["ui.router", "ui.bootstrap"]);

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

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.state({
    name: "home",
    url: "/",
    templateUrl: "view/home.html",
    controller: "homeController",
  });
});
