/*
HACKERRANK problem.
Title: "Two Characters"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/two-characters/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

Explanation:
A) get a set of unique letters in the string.
B) build an array of all 2 letter combinations from that set.
C) go through those combinations one at a time, building a new string that only consists of those 2 letters.
D) use a regex to see if there are any consecutive matching letters, e.g. aa. If there are then it isn't an alternating string.
E) if it is an alternating string, then update the max length found if it is longer.
*/ 

function alternate(s) {
    let maxlen = 0;
    const combinations = [];
    [...new Set(s)].forEach((v, i, a) => {
        a.slice(i + 1).forEach(v1 => {
            combinations.push([v, v1]);
        })
    });
    combinations.forEach(comb => {
        let t = [...s].filter(v => comb.includes(v)).join('');
        /*
        (.) matches any character (the dot) and captures it (the brackets). This capture can be used later in the regexp by referring to \1 (backreference capture number one).
        So this regexp matches any character that is immediately followed by the same character, e.g. aa, bb, cc, but not xy
        If the output of that match is null then there are no duplicate characters like that, which therefore means the characters must be alternating.
        */
        if (t.match(/(.)\1/) === null) { 
            maxlen = Math.max(maxlen, t.length)
        }
    })
    return maxlen;
}