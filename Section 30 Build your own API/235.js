// Creating POST, PUT and PATCH Routes

//4. POST a new joke
app.post("/jokes", (req, res) => {
    const newJoke = {
      id: jokes.length + 1,
      jokeText: req.body.text,
      jokeType: req.body.type,
    };
    jokes.push(newJoke);
    console.log(jokes.slice(-1));
    res.json(newJoke);
  });
  
  //5. PUT a joke
  app.put("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const replacementJoke = {
      id: id,
      jokeText: req.body.text,
      jokeType: req.body.type,
    };
  
    const searchIndex = jokes.findIndex((joke) => joke.id === id);
  
    jokes[searchIndex] = replacementJoke;
    // console.log(jokes);
    res.json(replacementJoke);
  });
  
  
  //6. PATCH a joke
  app.patch("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const existingJoke = jokes.find((joke) => joke.id === id);
    const replacementJoke = {
      id: id,
      jokeText: req.body.text || existingJoke.jokeText,
      jokeType: req.body.type || existingJoke.jokeType,
    };
    const searchIndex = jokes.findIndex((joke) => joke.id === id);
    jokes[searchIndex] = replacementJoke;
    console.log(jokes[searchIndex]);
    res.json(replacementJoke);
  });2