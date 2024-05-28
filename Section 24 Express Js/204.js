// INTRODUCTION TO MIDDLEWARES

// When a request comes from the server and before it gets processed by the route handlers (GET,POST etc), there is something in between called Middleware which can work with these requests before they get processed and reach the final destination
// Middleware pre-processes the requests
// It can be used for logging the requests ==> how long it took for the request to come through, what type of request get,post etc?, status of request being handled
// Used for authentication Eg: Facebook to Handbook -- Permission of Name change??
// Process any errors in the request

// BODY PARSER
// Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// After downloading the course resources, we need to use the middleware, after clicking submit button, form is gonna make a POST request to the path we have specified, we use a route handler to handle that post request and we use body parser so that we can parse the information that comes in and add the data to the request obj so that we can console.log it
// This is the code required:
// import express from "express";
// import bodyParser from "body-parser";
// const app=express();
// const port=300;
// app.use(bodyParser.urlencoded({extended: true}));

// app.post("/submit",(req,res)=>{
//     console.log(req.body);
// })

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });