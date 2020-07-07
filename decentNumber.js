/*
HACKERRANK problem.
Title: "Sherlock and The Beast"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

*/ 

function decentNumber(n) {
    let y = n;
    let z = y;
    while (z % 3 !== 0) {
        z -= 5; 
    }
    if (z < 0) {
        console.log('-1');
    }
    else {
        console.log(new Array(z).fill('').map(a => '5').concat(new Array(y-z).fill('').map(a => '3')).join(''))
    }
}