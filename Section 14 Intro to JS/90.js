//KAREL ROBOT
//Problem - 1:-
function main(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();
 }
 
 function moveFourTimes(){
    move();
    move();
    move();
    move();
 }


//Problem - 2:-
function main(){
    putBeeper();
    work1();
    work1();
    work1();
    work1();
 }
 
 function work1(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }