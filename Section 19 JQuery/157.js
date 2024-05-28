//Adding and Removing Elements with jQuery

$("h1").before("<button>NEW</button>");
//this will add a new button before h1
$("h1").after("<button>NEW</button>");
//this will add a new button after h1
$("h1").prepend("<button>NEW</button>");
//this will add a new button before the  h1 but it will be present inside the element
$("h1").append("<button>NEW</button>");
//this will add a new button after the h1 but it will be present inside the element


//to remove
$("button").remove();
//this will remove all the button elements inside current web page
