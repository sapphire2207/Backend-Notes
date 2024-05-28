// Creating DELETE route

//7. DELETE Specific joke
//Optional Edge Case Mangement: Can you think of a situation where we might have an issue deleting
//a specific joke out of the array? Can you think of a solution?
app.delete("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const searchIndex = jokes.findIndex((joke) => joke.id === id);
    if (searchIndex > -1) {
      jokes.splice(searchIndex, 1);
      res.sendStatus(200);
    } else {
      res
        .status(404)
        .json({ error: `Joke with id: ${id} not found. No jokes were deleted.` });
    }
  });
  
  //8. DELETE All jokes
  app.delete("/all", (req, res) => {
    const userKey = req.query.key;
    if (userKey === masterKey) {
      jokes = [];
      res.sendStatus(200);
    } else {
      res
        .status(404)
        .json({ error: `You are not authorised to perform this action.` });
    }
  });