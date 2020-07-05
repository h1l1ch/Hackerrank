/*
HACKERRANK problem.
Title: "Find the Median"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/find-the-median/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
1) Launch given code only passing your own "array" value.
2) Copy&Paste code on Hackerrank to make sure it works.

If you read this - the solved problem isn't difficult. Nothing to comment.
*/

function findMedian(arr) {
    let ansMed;
    arr.sort((a, b) => a - b); // Ascending order.
    ansMed = arr[Math.floor(arr.length / 2)];
    return ansMed;
};

const string = `0 1 2 4 6 5 3`;
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));
findMedian(arrNum)