/*
HACKERRANK problem.
Title: "Maximizing XOR"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/maximizing-xor/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

*/ 

function maximizingXor(l, r) {
    let max = 0;
    let xor = (a, b) => a ^ b;
    for (let i = l; i <= r; i++) {
        for (let j = i + 1; j <= r; j++) {
            if (xor(i, j) > max) max = xor(i, j);
        }
    }
    return max;
}