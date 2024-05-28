//Objects, their Methods and the Dot Notation


var bellBoy1={
    namee:"Sridhar",
    age:19,
    languages:["C++","Javascript","React js"],
    moveSuitcase: function(){
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}

bellBoy1.moveSuitcase();
//we can also add methods to our objects using constructor objects
function BellBoy(name,age,hasWorkPermit,languages){
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.languages=languages;
    this.moveSuitcase=function() {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}
//Now here all of the objects will have the function moveSuitcase

//TASK:-
function HouseKeeper(yearsOfExperience,namee,cleaningRepotire){
    this.yearsOfExperience=yearsOfExperience;
    this.namee=namee;
    this.cleaningRepotire=cleaningRepotire;
    this.clean=function(){
        alert("Cleaning in Progress...");
    }
}

var houseKeeper1=new HouseKeeper(12,"James",["bedroom"]);
houseKeeper1.clean(); //We get an alert saying Cleaning in Progress...
// This above line is similar to the audio method we have added into our drum kit
var audio=new Audio('./sounds/tom-1.mp3');
    audio.play();
    // This may be an inbuilt object
    
