//FUNCTION:- OUTPUTS AND RETURN VALUES

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var bottles=Math.floor(money/1.5);
    console.log("Buy "+bottles+" bottles of Milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return money%1.5;

  }
  var change=getMilk(10);

  //TASK:-
  function getMilk(money,costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Buy "+findBottles(money,costPerBottle)+" bottles of Milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money,costPerBottle);

  }
//   var change=getMilk(10);

  function findBottles(startMoney,costPerBottle){
    var bottles=Math.floor(startMoney/costPerBottle);
    return findBottles;
  }

  function calcChange(startMoney,costPerBottle){
    var change=startMoney%costPerBottle;

    return change;
  }

  console.log("Hello Sir, here is your "+getMilk(5,1.5)+" change");