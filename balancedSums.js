/*
HACKERRANK problem.
Title: "Sherlock and Array"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/sherlock-and-array/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

*/ 

function balancedSums(arr) {

    // If array is a single number the sum of the array on the left hand side 
    // is equal to the sum of the array on the right hand side
    // and they both are equal to 0.
    if (arr.length === 1) return 'YES'

    let left = 0,
        // Chosen element starts with the element on the zero position (1st element). 
        el = arr[0],
        // Sum on the right hand side is the sum of all elements but the ones on the left hand side and chosen element.  
        right = arr.slice(1).reduce((a, b) => a + b);
    
    // Check if the sum of elements on the right equals to the sum of elements on the left and equals to 0.
    if (left === right) return 'YES'

    for (let i = 1; i < arr.length; i++){
        // Move from first element on to the very end of the array.
        left += el;
        el = arr[i];
        right -= el;
         
        if (left === right) return 'YES'
    }
    
    return 'NO';
}