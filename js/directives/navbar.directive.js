app.directive("navbar", () => {
  return {
    templateUrl: "view/navbar.html",
    replace: true,
    restrict: "E",
    controller: "navbarController",
  };
});
