// What is EJS??

// EJS stands for Embedded JavaScript
// It's almost like having a little javascript module that can run js code inside a html, ends with the .ejs extension
// How it is done:-
app.post("/submit", (req,res)=>{
    res.render("index.ejs",
    {name: req.body["name"]} // Here we are sending this key-value pair to the file
    );
});

// In index.ejs file:-
{/* <body>
    <h1>
        Hello <%= name %>
    </h1>
    </body> */}