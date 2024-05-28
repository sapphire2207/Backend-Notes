//SELECTING HTML ELEMENTS WITH JAVASCRIPT


//We get a collection i.e all the elements with this tag
document.getElementsByTagName("li");
document.getElementsByTagName("li")[2].style.color="purple";
document.getElementsByTagName("li").length;

document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color="red";

//we get only one item
document.getElementById("title");
document.getElementById("title").innerHTML="GOOD BYE";

//always input a selector
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");

document.querySelector("li a");//we can use different types of selector methods
document.querySelector("li.item");//returns the first list item
document.querySelector("#list a");

//we get a list of items
document.querySelectorAll("#list .item");
document.querySelectorAll("#list .item")[2].style.color="green";


//TASK:-
document.querySelector("li a").style.color="red";

