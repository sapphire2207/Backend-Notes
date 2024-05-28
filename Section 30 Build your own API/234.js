// Creating GET routes

//1. GET a random joke
app.get("/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
  });
  
  //2. GET a specific joke
  app.get("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const foundJoke = jokes.find((joke) => joke.id === id);
    res.json(foundJoke);
  });
  
  //3. GET a jokes by filtering on the joke type
  app.get("/filter", (req, res) => {
    const type = req.query.type;
    const filteredActivities = jokes.filter((joke) => joke.jokeType === type);
    res.json(filteredActivities);
  });