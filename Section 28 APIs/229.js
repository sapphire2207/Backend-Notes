// REST APIs

// The alternative for using axios for api in a better manner is the more modern syntax which was introduced in 2017 as a part of the ES8 upgrade to JavaScript. And this is formed by the async and await keyword. What happens in this case is we have a particular function and this function is marked as asynchronous by having that async keyword before it, and then we can have the name of the function, for example, get(). And then we have our curly braces, and then inside here we can have some sort of process that happens asynchronously, and all we have to do is mark it with the word await. What this says is wait until this process is done before continuing to the next line of code And the nice thing about this style is that it kind of makes our code look as if it is synchronous code. It's run line by line only. Once this line of code is completed do we continue to the next line of code.
// Whereas, with the .then() syntax, it can get a little bit hairy when you're trying to debug it, especially if you have lots of things chained on and you get confused, "What is the order of things being called?"

// For POST Request:
// But when it comes to the .post(), we have an extra one in the middle which is called data on the Axios documentation.
// It's the body of your form data. So maybe you have something called Username and you set it to some sort of value You have another one called Password and you set it to some sort of value. This is the body of the URL-encoded data that you normally get from your HTML form, and that is what you would put in here to be sent over when you're making the POST request. And similar to with GET, you can also add different configs into this third optional parameter such as the headers if you want to do authentication, using basic authentication.
import axios from "axios";
app.post("/",async(req,res)=>{
    try{
        await axios.post("URL",body,config);
        res.sendStatus(201);
    }catch(error){
        res.send(404).send(error.response.data);
    }
});

// For PUT request:
// If you wanted to move on to PUT requests, so remember that a put request provides all of the data that we want to update in our back-end. So for example, if you have some sort of data, you have to provide everything and it's going to replace your entire entry with whatever it is you pass over in the put request. The PUT method with Axios looks pretty much identical to POST, apart from the fact that it's axios.put().
import axios from "axios";
app.put("/",async(req,res)=>{
    try{
        await axios.put("URL",body,config);
        res.sendStatus(201);
    }catch(error){
        res.send(404).send(error.response.data);
    }
});

// For PATCH request:
// And similarly, we also have our PATCH request, which means that you can provide any bit of the data you want to update and everything else in the resource stays as it is.
import axios from "axios";
app.patch("/",async(req,res)=>{
    try{
        await axios.patch("URL",body,config);
        res.sendStatus(201);
    }catch(error){
        res.send(404).send(error.response.data);
    }
});

// For DELETE request:
// And finally, we have our DELETE method which notice in this time again only takes two parameters the URL endpoint and also any config that you want to pass over as a JavaScript object
import axios from "axios";
app.delete("/",async(req,res)=>{
    try{
        await axios.delete("URL",config);
        res.sendStatus(201);
    }catch(error){
        res.send(404).send(error.response.data);
    }
});

