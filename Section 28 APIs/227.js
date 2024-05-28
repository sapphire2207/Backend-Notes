// Making server-side API Requests with Axios:-

// Here actually we are trying to get our server to make a request to somebody else's server and in return they send us a response with data or resource that we need and we can do that through our public API

// If you use native node modules it will become difficult, but if you use AXIOS, it knows the purpose we're trying to achieve, we are trying to reach out from the server to another resource on the internet
// Code:-
import axios from "axios";

app.get("/",async(req,res)=>{
    try {
        const response = await axios.get("https://bored-api.appbrewery.com/random"); // this await will make sure it's work is done and only then it is gonna render the index.ejs afterwards
        res.render("index.ejs",{activity: response.data}); // Here the javascript object is directly passed
    }catch(error){
        console.error("Failed to make request:",error.message);
        res.status(500).send("Failed too fetch activity. Please try again");
    }
}); 