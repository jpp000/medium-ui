app.service('userService', function ($http) {
  this.createUser = function (userData) {
    return $http.post(`${baseUrl}users`, userData);
  }
    
  this.loginUser = function (loginData) {
    return $http.post(`${baseUrl}users/login`, loginData);
  }

  this.getUser = function (userId) {
    return $http.post(`${baseUrl}users/${userId}`)
  }
})