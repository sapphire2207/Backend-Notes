//A Deeper Understanding of Javascript Objects

var bellBoy1={
    namee:"Sridhar",
    age:19,
    languages:["C++","Javascript","React js"]
}

//TASK for creating object for housekeeper

var houseKeeper1={
    yearsOfExperience:12,
    namee:"Jane",
    cleaningRepotire:["bathroom","lobby","bedroom"]
}
//we can access the above objects my dot notation
console.log(houseKeeper1.namee);

//it is very difficult to every time create so many objects if the need is in larger number
//So to automate we use constructors

function BellBoy(name,age,hasWorkPermit,languages){
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.languages=languages;
}

//How to intilaize the object
var bellBoy1=new BellBoy("Timmy",19,true,["french","english"]);

//TASK:-
function HouseKeeper(yearsOfExperience,namee,cleaningRepotire){
    this.yearsOfExperience=yearsOfExperience;
    this.namee=namee;
    this.cleaningRepotire=cleaningRepotire;
}

var houseKeeper1=new HouseKeeper(12,"jane",["bathroom","lobby","bedroom"]);

console.log(houseKeeper1.cleaningRepotire);//you get the required output

