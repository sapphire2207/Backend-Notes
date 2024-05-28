//Manipulating Styles with jQuery

$("h1").css("color","blue");

//we can also access the color by console logging it

console.log($("h1").css("color"));// it can be anything like font-size or etc etc
//i.e if it has only one value it means we can access the property that is set


//To add classes to our html
$("h1").addClass("big-title");
//similarly
$("h1").removeClass("big-title");

//to add multiple classes
$("h1").addClass("big-title margin50");//give space between the two classes

//using jquery we can check whther a particular element has a specific class or not
$("h1").hasClass("margin50");
//it returns boolean
