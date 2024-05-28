//ADDING EVENT LISTENERS TO A BUTTON:-
//Method 1:-
// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("Button got clicked");
// }

//METHOD 2:-
document.querySelector("button").addEventListener("click",function (){
    alert("Button got clicked");
});

//TASK:-
var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        alert("I got clicked");
    });
}



