//CONTROL STATEMENTS:- IF-ELSE STATEMENTS

var name1=prompt("Enter first person's name:-");
var name2=prompt("Enter second person's name:-");
var loveScore=Math.random();
loveScore=loveScore*100;
loveScore=Math.floor(loveScore)+1;

if(loveScore>70){
    console.log("You love each other like kanye loves kanye");
}
else{
    console.log("Love between both of you is:"+loveScore+"%");
}
