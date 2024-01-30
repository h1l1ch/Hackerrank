/*
HACKERRANK problem.
Title: "Anagram"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/anagram/problem

Two words are anagrams of one another if their letters can be rearranged to form the other word.

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

Things I've learned:
* Strings also have their length attribute.
* Slice() can be called upon strings.
* Return can be placed in multiple function's places.
*/ 

function anagram(s) {
    let a = s.slice(0, s.length/2)
    let b = s.slice(s.length/2, s.length)

    if (s.length % 2 !== 0) return -1

    for (let letter of a) {
        if (b.includes(letter)) {
            b = b.replace(letter, "")
        }
    }

    return b.length
}


anagram(`xaxbbbxx`);