//TASK:-

var namee = prompt("Enter your name:-");
var firstLetter = namee.slice(0, 1);
firstLetter = firstLetter.toUpperCase();
var remainingWord = namee.slice(1, namee.length);
remainingWord = remainingWord.toLowerCase();
var fullName = firstLetter + remainingWord;
alert("Hello " + fullName);
