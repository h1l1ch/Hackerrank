/*
HACKERRANK problem.
Title: "Circular Array Rotation"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/circular-array-rotation/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

*/ 

function circularArrayRotation(arr, k, queries) {
    // Number of steps required.
    k = k % arr.length;

    // New array for the stored final values.
    return queries.map((index) => {
        const curIndex = k - index;
        if (curIndex <= 0) {
            return arr[Math.abs(curIndex)]
        } else {
            return arr[arr.length]
        }
    })
    // return queries.map((index) => {
    //     const curIndex = index-k;
    //     if(curIndex<0) {
    //         return a[a.length+curIndex];
    //     }
    //     return a[curIndex];
    // });
};

let arr = [1, 2, 3];
let queries = [0, 1, 2];
k = 2;
circularArrayRotation(arr, k, queries);

