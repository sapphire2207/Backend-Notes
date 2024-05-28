// Building a Blog API

//CHALLENGE 1: GET All posts
app.get("/posts", (req, res) => {
    console.log(posts);
    res.json(posts);
  });
  
  //CHALLENGE 2: GET a specific post by id
  app.get("/posts/:id", (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  });
  
  //CHALLENGE 3: POST a new post
  app.post("/posts", (req, res) => {
    const newId = lastId += 1;
    const post = {
      id: newId,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      date: new Date(),
    };
    lastId = newId;
    posts.push(post);
    res.status(201).json(post);
  });
  
  //CHALLENGE 4: PATCH a post when you just want to update one parameter
  app.patch("/posts/:id", (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post not found" });
  
    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;
    if (req.body.author) post.author = req.body.author;
  
    res.json(post);
  });
  
  //CHALLENGE 5: DELETE a specific post by providing the post id.
  app.delete("/posts/:id", (req, res) => {
    const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Post not found" });
  
    posts.splice(index, 1);
    res.json({ message: "Post deleted" });
  });