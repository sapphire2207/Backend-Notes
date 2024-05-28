function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        //Write your code here 
        if(n===1){
            arr = [0];
            return arr;
        }
        var arr = [0,1];
        var prev2 = 0, prev1 = 1;
        for(var i=2;i<n;i++){
            arr.push(arr[prev2]+arr[prev1]);
            prev2++;
            prev1++;
        }
        return arr; 
        //Return an array of fibonacci numbers starting from 0.   
    //Do NOT change any of the code below 👇
    }
    