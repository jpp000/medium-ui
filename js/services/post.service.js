app.service("PostService", function () {
  const posts = [
    {
      id: 1,
      userName: "User 1",
      date: "Feb 4, 2024",
      title: "Title 1",
      content: "Content 1",
      likes: 10,
      isLikedByUser: false,
    },
    {
      id: 2,
      userName: "User 2",
      date: "Feb 5, 2024",
      title: "Title 2",
      content: "Content 2",
      likes: 5,
      isLikedByUser: true,
    },
  ];

  this.getPosts = () => 
    posts ?? []
  
  this.getPostById = (id) => posts.find(post => post.id === id)

  this.createPost = (post) => posts.push(post)
});
