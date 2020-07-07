/*
HACKERRANK problem.
Title: "Weighted Uniform Strings"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/weighted-uniform-string/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function weightedUniformStrings(s, queries) {
    var code;
    var prevChar;
    var prevCharCount;
    var dic = Object.create(null);
    for (var i = 0; i < s.length; i++) {
        code = s.charCodeAt(i) - 96;
        if (prevChar === code) {
            prevCharCount++;
        } else {
            prevCharCount = 1;
            prevChar = code;
        }
        
        dic[code * prevCharCount] = true;
    }
    
    var result = [];
    for (var i = 0; i < queries.length; i++) {
        result.push(dic[queries[i]] ? "Yes" : "No");
    }
    
    return result;
}