// Introduction to JSON:-

// In the last lesson when we made a request to our API, we got our data back in the form of JSON
// JSON - Javascript object notation - it is way to format data that can be sent over internet in a readable and efficient way, it is a structured JS Object (which has key-value pairs), But in JSON the keys and values are serialized into strings,it contains an array and inside them it has the objects

// In order to send the javascript object to the internt we need to convert it to JSON file, to do that:- 
// const jsonData = JSON.stringify(data); ==> here we put the js object as the data

// And to do vice-versa:-
// const data = JSON.parse(jsonData);