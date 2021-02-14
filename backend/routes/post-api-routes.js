const Post = require('../models/post')

module.exports = (app) => {
app.post('/post', (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
  
    const newPost = new Post ({
      title,
      body,
    })
    newPost.save()
  });
  
  app.get('/post', (req, res) => {
    Post.find()
      .then(foundPosts => res.json(foundPosts))
      
  });
}