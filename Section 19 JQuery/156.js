//Adding Event Listeners with jQuery

$("h1").click(function(){
    $("h1").css("color","purple");
});

// we needed to write the for loop for adding the event to multiple elements hich has the same class
// but in jquery once added it applies for all the elements
$("button").click(function(){
    $("h1").css("color","purple");
});

$("input").keydown(function(event){
    console.log(event.key);
});

$(document).keydown(function(event){
    console.log(event.key);
});

//TASK:-
$(document).keydown(function(event){
    $("h1").text(event.key);
});

//
$("h1").on("mouseover",function(){
    $("h1").css("color","green");
});

$("h1").on("click",function(){
    $("h1").css("color","green");
});
