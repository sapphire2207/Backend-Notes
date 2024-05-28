// API Authentication:-

// The ability to prove that you have the rights to access the API
// In certain scenarios we want to protect the resources behind our API by using authemtication
// In this lesson, we're going to be learning exactly how we can authenticate the user or the client that is making the API request and depending on whether or not they are authorized to make that request, we can send them the data or tell them, "No, sorry, that's not allowed."

// There are 4 tiers in authentication:-
// No authentication
// Basic authentication
// API key based authorization
// Token based authentication

// No authentication:- this generally occurs in Public APIs, in the example of bored api, none of the endpoints required any sort of authentication
// To prevent an abuse of API, i.e when somebody makes too many requests, then the api providers might add a saftey check is to put a Rate limit, as we saw in the bored APIs instance, we had a rate limit of 100 requests per 15 minutes

// Basic Authentication:- here you provide a username and password when you make a API request, i.e you are authenticating yourself to the API provider and proving your identity
// It is generally done by passing a Base64 encoded string in the header of the request
// i.e username: password ==> so this entire thing is converted into base64
// And you can add this to an authorization header and you can pass this data along when you make your requests
// use postman and http://secrets-api.appbrewery.com for reference

// API key authorization:-
// authorization vs authentication ==> authorization is something that allows you to use the api, authentication is something that allows you to be identified as a user to api provider
// So here you can generate an api request only when you are authorized, i.e you should have a API key to generate an api request
// refer http://secrets-api.appbrewery.com

// Token Based authentication:-
// The Token-Based Authorization or authentication is even more secure because essentially we're getting the user to use a username and password to log in and then once they've logged in, we generate a token to be used with the API so the API doesn't get involved with the username and password and instead it's the token that's constantly being used to interact with the API.

// So let's say that you are building a third party app, say it's a weather app, but you have a special twist on the app where you are going to get hold of a user's events in their Google calendar. So you want to see that they have a meeting, for example, on Tuesday and it's happening in Baltimore.So you grab all of these pieces of data and you look at the weather for that location and that date, and maybe you would be able to send the user an alert to tell them to bring an umbrella to that particular event.

// That's the idea behind interacting with the Google Calendar APIs. For the user to be able to grant you access to this data, well, what do you have to do? If you weren't using token-based authentication, then you would have to give us, this third party, the username and password, so that we can use this to interact with the Google calendar API. Instead, what we're able to do is we can use token-based authentication or OAuth to get the user to sign in with Google, and this generates a token for us to get hold of and then we can use this token to interact with the Google Calendar API. And then we can get hold of the user's events, their meetings, we can even post data or delete data,we can basically interact with Google calendar as this user without ever needing to get hold of their username and password. And instead all of that security stuff is handled by Google.So this is a way more secure way of doing API authentication.