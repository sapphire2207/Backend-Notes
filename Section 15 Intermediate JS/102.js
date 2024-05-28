//COMBINING COMPARATORS
// &&, ||, !

var name1=prompt("Enter first person's name:-");
var name2=prompt("Enter second person's name:-");
var loveScore=Math.random();
loveScore=loveScore*100;
loveScore=Math.floor(n)+1;

if(loveScore>70){
    console.log("You love each other like kanye loves kanye");
}
else if(loveScore>30 && loveScore<=70){
    console.log("Love between both of you is:"+loveScore+"%");
}
else if(loveScore<=30){
    console.log("Love between both of you is:"+loveScore+"%, you two together are like oil and water");
}
else{
    console.log("Love between both of you is:"+loveScore+"%");
}
