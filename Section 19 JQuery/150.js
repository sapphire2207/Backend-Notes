// How to Incorporate jQuery into Websites

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
//should be placed above our index.js at the end of the body tag

$("h1").css("color","red");

//if you incorporate the script in the header make sure to check whether it is ready to load
$(document).ready(function(){
    $("h1").css("color","red");
});