// Manipulating Text with jQuery

$("h1").text("Bye");//this will change all the text
$("button").text("Dont Click Me");

//to add innerHTML like javascript in jquery we do it as below:
$("button").html("<em>Heyyyyyy</em>");
//there's difference between the above and below codes
$("button").text("<em>Heyyyyyy</em>");