// Formatting API Requests:-

// The normal get request from your front-end to your server and back with a response to it, is nothing but we are hitting a private API
// Here we are interested in exchange of information from someone else's server to our server ==> Public API
// So to use those Public APIs we learn abt formatting those requests
// Example:
// http://bored-api.appbrewery.com

// End point:- It's basically a different route on API provider server ==> baseUrl/endpoint
// eg: /random, /filter
// Task: Using POSTMAN hit the random endpoint of the Bored API to get hold of a particular random activity.
// To prevent people from abjusing the resource, we can add a rate limit i.e for ex: 100 requests every 15min


// Query Paramters:- adding a query to the end of the request ==> baseUrl/endpoint?query=value&query2=value
// basically a key-value pair
// Task: Hit the endpoint to filter activities, find all of the activities that are social for 2 people


// Path Parameters:- endpoint can't be changed i.e it is a fixed path ==> /random is an endpoint and that's never gonna change, but a path paramter can be changed e.g: id, username,key ==> it's basically something that's very specific that can identify a resource in the API
// Task: Hit an api request using a key as a path to query for this specific activity 
// https://bored-api.appbrewery.com/activity/3943506