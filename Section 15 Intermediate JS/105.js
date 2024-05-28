//WORKING WITH ARRAYS

var guestList=["Krishna", "Balaram", "Radha", "Prabhupad", "Amarendra das"];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[0]);
console.log(guestList.includes("Krishna"));//true

//TASK:-

var guestName=prompt("Enter your name:-");

if(guestList.includes(guestName)){
    console.log("WELCOME TO THE PARTY");
}
else{
    console.log("SORRY");
}