/*
HACKERRANK problem.
Title: "Making Anagrams"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/making-anagrams/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function makingAnagrams(s1, s2) {
    let s1Copy = s1;
    let s2Copy = s2;
    let diffCount = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s2Copy.includes(s1[i])) {
            s2Copy = s2Copy.replace(s1[i], '')
        } else {
            diffCount++;
        }
    }

    for (let i = 0; i < s2.length; i++) {
        if (s1Copy.includes(s2[i])) {
            s1Copy = s1Copy.replace(s2[i], '')
        } else {
            diffCount++;
        }
    }
    
    return diffCount;
}

const string1 = `cde`;
const string2 = `abc`;

makingAnagrams(string1, string2);