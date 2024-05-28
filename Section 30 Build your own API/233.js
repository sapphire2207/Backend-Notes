// Building your own APIs:-

// What we're going to be building in this module is a REST API. Unfortunately, it's not time to rest, but it is a time to build what's called a Representational State Transfer API. Don't sleep just yet. It's time to review what we need to do to follow the REST architecture. So it's essentially just a bunch of rules that describe how an API should be.Let's take a look.

// 1) And the number one rule for making an API RESTful is that it uses standard HTTP methods. You're already pretty familiar with this. It's your GET, POST, PUT, PATCH and DELETE. And these are the standard verbs that you use to interact with our RESTful API. So that means if you wanted to grab hold of something from the API, you would use the GET method. If you want to delete something, you would use the delete method. So far pretty easy.

// 2) The next rule is that it should probably have a standard data format that it responds with. That means something like the JSON format, the JavaScript Object Notation, or something like XML. And this is a response to calling the API and the response is given back to the client and RESTful APIs respond with something that is pretty standard like JSON. This is the representation part of the Representational State Transfer. Resources are represented in a specific format like JSON, and that is sent in response to the client.

// 3) The next rule is that clients and servers in RESTful APIs are completely separate. They are not on the same system or in the same file and they're able to message each other over a network. In order to make requests and also to get back responses. And this part of the RESTful API architecture allows each side to be able to scale independently from each other and they can evolve and be completely built separately by different people, which means that the RESTful API allows the whole system to scale very easily.

// 4) The next rule is Statelessness. What this means is that each request from the client to the server should contain all the information that's needed to understand and process the request. So the server shouldn't be storing any sort of client side, state or client side data between the requests. So what this means is that each single request can be completed, and each single response is also complete without need to know what happened previously. And this basically again allows better scalability of the API and it simplifies the server-side implementation. So every single time the client makes a request to the server, it contains all of the information that the server needs in order to figure out what to respond back, and the server doesn't need to check, "Oh, what did this person ask for previously?" Or. "Oh, uh, last time I sent them the fourth item, so if they're requesting now, they must want the fifth item." That means that you need to keep track of state and it means that if you have multiple clients coming in, it can quickly reduce your efficiency and scalability of your API. This rule basically allows the server to serve many, many clients and many, many requests.

// 5) Next is that your REST, the API is resource-based, so it is an API that is centered around resources and uses a Unique Resource Identifier, also known as a Resource Locator, so this is a URI, or a URL, in order to locate specific resources. We all know what a URL is because you use it every single time you try to access a website, but know that a Universal Resource Locator, is simply just an address for a particular resource, and it's a type of a Universal Resource Identifier. It identifies that resource in the API.







