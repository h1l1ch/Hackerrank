/*
HACKERRANK problem.
Title: "Flipping bits"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/flipping-bits/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

*/ 

function flippingBits(N) {
    return ~ N >>> 0;
};

