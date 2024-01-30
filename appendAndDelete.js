/*
HACKERRANK problem.
Title: "Append and Delete"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/append-and-delete/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

*/ 

function appendAndDelete(s, t, k) {
    if ((t.endsWith(s) || s.endsWith(t)) || (s.length + t.length <= k)) {
        return "Yes";
    }
    // Counter counts how many characters must be deleted to encounter with the fist character that does not match.
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[i]) {
            counter++;
        } else {
            break;
        }
    }
    // To count total steps total number of deleted characters added to total number of added characters. 
    if (((s.length - counter) + (t.length - counter)) === k) {
        return "Yes";
    } else {
        return "No";
    }

}

appendAndDelete(`abbbbbb`, `bbbbbbb`, 14)