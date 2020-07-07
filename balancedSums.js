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

    if (arr.length === 1) return 'YES'

    let left = 0, el = arr[0],

    right = arr.slice(1).reduce((a, b) => a + b);

    if (left === right) return 'YES'

    for (let i = 1; i < arr.length; i++){
        left += el;
        el = arr[i];
        right -= el;
         
        if (left === right) return 'YES'
    }
    
    return 'NO';
}