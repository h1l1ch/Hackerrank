/*
HACKERRANK problem.
Title: "Sherlock and Anagrams"
Difficulty: "Medium".
Link: https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function sherlockAndAnagrams(s) {

    let count = 0;

    // Size of our sliding window
    for (let i = 1; i < s.length; i++) {
        let found = {};
        
        // Starting index of our sliding window
        for (let j = 0; j + i <= s.length; j++) {
            let substr = s.substr(j, i); // substr() extracts substring.
            substr = substr.split('').sort().join(''); // alphabetically sorts substring.
            if (found[substr]) {
                count += found[substr];
                found[substr]++;
            } else {
                found[substr] = 1;
            }
        }
    }

    return count;
}

sherlockAndAnagrams(s);