// HTTP Requests:-

// http stands for hyperText is same as hyper text in HTML, and transfer protocol --> it is a language that allows computers to talk to each other across the internet, so that they can understand each other
// Vocabulary of HTTP:
// It helps to know the secrets lives of the computers
// 1) GET:- when we want or request a resource from the server, it may be a html website, a piece of text, piece of data from database
// 2) POST:- sending a resource to a server, it may be a piece of information, E.g: Submiting the details to the server by clicking sign-up button
// 3) PUT & PATCH - these are update methods, PUT is used when you want to replace a resource with whatever it is you're sending over ==> update something by replacing it completely, PATCH is used when you want to patch-up a resource E.g: If you have got a broken bicycle ordered from AMAZON, then if you use PUT it will give you a new bicycle, and if PATCH it will replace it with the required part
// 4) DELETE:- when we want to delete a resource

// Previously, when we started the server, we get CANNOT GET / ==> this implies we are trying to reach the homepage, but the server doesn't have the required code to do that task
// In the below code additional to the code used to start the server, we are trying to reach the home page/root by sending to a request to the server and in response we get the output
//app.get("/",(req,res)=>{ // so whenever a get request comes, it inturn sends a response saying Hello world
//     res.send("Hello world");
// });

// Now repeat the steps learned in the previous class to start the server
// app.get("/",(req,res)=>{
//     console.log(req); // this tells about how the request from the browser looks like
// });

// app.get("/",(req,res)=>{
//     console.log(req.rawHeaders); // this gives all the key-value pairs gthat coem form the request originated
// }); 

// NODEMON : It is a tool that helps node applications by automatically restarting the node application when file changes in the directory are detected
// To use that: nodemon <filename>
// To install it: npm i -g nodemon (g indicates global)
// And if you make any changes nodemon keeps on watching them and restarts the server

// if we want to add other endpoints so that we can handle more situations like about,contact page and etc
// app.get("/about",(req,res)=>{
//     res.send("<h1> About </h1>");
// }); 