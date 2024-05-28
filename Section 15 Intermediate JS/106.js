//ADDING ELEMENTS AND INTERMIDIATE ARRAY TECHNIQUES

//FIZBUZZ TASK
// .push() - used to add the Element to the last of the array
// .pop() - used to pop the last element of the array

var output=[];
var count=1;
function fizzBuzz(){

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
    console.log(output);
}

fizzBuzz();