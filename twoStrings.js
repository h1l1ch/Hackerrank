/*
HACKERRANK problem.
Title: "Two Strings"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/two-strings/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function twoStrings(s1, s2) { 
    // First time used for of on string to loop through each letter of the word.
    for (let letter of s1) { // For of is used to loop through any iterable object.
        if (s2.includes(letter)) {
            return 'YES'
        }
    }
    return 'NO'
};