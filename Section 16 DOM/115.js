//INTRODUCTION TO DOM

document;
document.firstElementChild; // we get the html part
document.firstElementChild.firstElementChild; //we get the head part
document.firstElementChild.lastElementChild; //we get the body tag
document.firstElementChild.lastElementChild.firstElementChild; //we get the h1 tag saying hello

var heading=document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML="Good Bye";

heading.style.color="red";

document.querySelector("input").click();

//properties 
car.color; //get property
car.numberOfDoors=4;//Sett property

//methods
car.drive();//method
//method is something that an object can do

//Eg:-
//For a button object the properties may be innerHTML, style, firstChild
//And the methods are click(), appendChild(), setAttribute()


