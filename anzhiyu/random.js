var posts=["2023/11/09/hello-world/","2023/10/27/article-title/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };