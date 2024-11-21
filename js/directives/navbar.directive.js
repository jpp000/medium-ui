app.directive("navbar", () => {
  return {
    templateUrl: "view/header.html",
    replace: true,
    restrict: "E",
    controller: "NavbarController",
  };
});
