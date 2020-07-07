/*
HACKERRANK problem.
Title: "Priyanka and Toys"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/priyanka-and-toys/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

*/ 

function toys(w) {
    let s = w.sort((a, b) => a - b), c = 0

    while (s.length > 0) {
        let max = s[0] + 4
        s = s.filter(n => n > max)
        c++
    }
    return c
}
  