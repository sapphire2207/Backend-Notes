//CONTROL STATEMENTS: WHILE LOOPS

var output=[];
var count=1;
function fizzBuzz(){

    while(count<=100){
        if(count%3===0){
            output.push("Fizz");
        }
        else if(count%5===0){
            output.push("Buzz");
        }
        else if(count%3===0 && count%5===0){
            output.push("FizzBuzz");
        }
        else{
            output.push(count);
        }
        count++;
    }
    console.log(output);
}

fizzBuzz();