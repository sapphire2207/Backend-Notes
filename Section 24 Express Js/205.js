// CUSTOM MIDDLEWARE

// Body parser belongs to the pre-processing category
// Morgan is used for logging requests ==> It can be used for logging the requests ==> how long it took for the request to come through, what type of request get,post etc?, status of request being handled
// The code is:
// import express from "express";
// import morgan from "morgan";

// const app = express();
// const port = 3000;
// app.use(morgan("combined"));

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// ## To create our own middleware:
// Using this we can handle any requests
// import express from "express";

// const app = express();
// const port = 3000;
 
// app.use((req,res,next)=>{
//     console.log("Request method: ",req.method);
//     next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
