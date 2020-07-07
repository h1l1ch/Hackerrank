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

function circularArrayRotation(a, k, queries) {
    const actualRotation = k % a.length;
    return queries.map((index) => {
        const actualIndex = index-actualRotation;
        if(actualIndex<0) {
            return a[a.length+actualIndex];
        }
        return a[actualIndex];
    });
};