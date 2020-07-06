/*
HACKERRANK problem.
Title: "Append and Delete"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/append-and-delete/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

Things I've learned:
* Strings also have their length attribute.
* Slice() can be called upon strings.
* Return can be placed in multiple function's places.
*/ 

function appendAndDelete(s, t, k) {
    if ((t.endsWith(s) || s.endsWith(t)) || (s.length + t.length <= k)) {
        return "Yes";
    }
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[i]) {
            counter++;
        } else {
            break;
        }
    }
    if (((s.length - counter) + (t.length - counter)) === k) {
        return "Yes";
    } else {
        return "No";
    }

}