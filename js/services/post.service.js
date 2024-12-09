app.service("postService", function ($http) {
  this.getPosts = function () {
    return $http.get(`${baseUrl}posts/?page=1`);
  };

  this.getPostById = function (id) {
    return $http.get(`${baseUrl}posts/${id}`);
  };

  this.createPost = function (postData) {
    return $http.post(`${baseUrl}posts`, postData);
  };

  this.updatePost = function (id, postData) {
    return $http.put(`${baseUrl}posts/${id}`, postData)
  }

  this.deletePost = function (id) {
    return $http.delete(`${baseUrl}posts/${id}`);
  }

  this.likePost = function (id) {
    return $http.post(`${baseUrl}posts/${id}/like`);
  }

  this.dislikePost = function (id) {
    return $http.post(`${baseUrl}posts/${id}/dislike`);
  }
});
