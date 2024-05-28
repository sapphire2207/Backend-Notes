//HOW TO PLAY SOUNDS ON WEBSITES

// var numberOfDrums=document.querySelectorAll(".drum").length;
// for(var i=0;i<numberOfDrums;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         var audio=new Audio('./sounds/tom-1.mp3');
//         audio.play();
//     });
// }

//TASK:-
// background-image: url(./images/tom1.png);

// console.log(this);//gives the identity of the event listener pressed

//TASK
var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        this.style.color="white";
    });
}