//Understanding Callbacks and How to Respond to Events

//Higher order functions are the one which take other functions as inputs
// ex:
document.addEventListener("keydown",respondToKey(event));
//respondToKey is a callback function
function respondToKey(event){
    console.log("key pressed");
}
//here the parameter passed i.e of name event can be named anything
//this callback function is not called by us, but by our document when the event takes place

//Understanding how callbacks work by seeing behind the scenes
function anotherAddEventListener(typeOfEvent,callback){
    //When an event happens it create an event object
    var eventThatHappened={
        eventType:"keydown",
        key:"p",
        durationOfKeydown:2
    }

    //now we can pass this object to the callback so that the programmer can get the event object and use it to see what event triggered

    //since we know that callback is not called for all the events, so it might check for which case the event will be triggered
    if(eventThatHappened.eventType===typeOfEvent){
        callback(eventThatHappened);
    }
}

//Now we call the event listener as below:
anotherAddEventListener("keydown",function(event){
    console.log(event);
});
//here we get the entire object i.e 
// eventType:"keydown",
// key:"p",
// durationOfKeydown:2

//Similarly below line works
document.addEventListener("keydown",function(event){
    console.log(event);
});
//It returns the object containing what all has happened behind the scenes
