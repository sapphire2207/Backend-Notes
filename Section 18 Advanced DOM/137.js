//Higher Order Functions and Passing Functions as Arguments

// $0.addEventListener("click",function(){
//     console.log("I got clicked");
// });

//Undertanding the above functions in a deeper level i.e how passing the functions as arguments work

// function calculator(num1,num2){
//     return num1+num2;
// }
// calculator(2,3);

// function calculator(num1,num2){
//     return num1*num2;
// }
// calculator(2,3);

function add(num1,num2){
    return num1+num2;
}

function multiple(num1,num2){
    return num1*num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function divide(num1,num2){
    return num1/num2;
}

function calculator(num1,num2,operator){
    return operator(num1,num2);
}
calculator(4,5,add);

//In console write debugger; and click shift+enter and in the next line call the desired function