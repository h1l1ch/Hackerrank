/*
HACKERRANK problem.
Title: "Palindrome Index"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/palindrome-index/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.

Explanation:
First I create a non-efficient checker function for palindrome (efficiency does not matter as it will be called only twice).
Then I'm checking first&last symbols in the for loop.
If I encounter a pair that is not equal, then I need to check for 3 options: a) without first symbol the line becomes a palindrome => answer is the index of the first symbol b) the same for the last symbol => answer is the index of the last symbol c) both previous options are not palindromes. Then I have at least two symbols that I need to remove in order to make this string a palindrome. Therefore, the answer is -1
Finally, if I checked every line and none of them are not not equal, then the string itself is a palindrome and the answer is -1
*/ 

function palindromeIndex(s) {
    const checkPal = string =>
        string.slice(0, Math.floor(string.length / 2)) ===
        string
            .slice(Math.ceil(string.length / 2))
            .split('')
            .reverse()
            .join('');
  
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            const stringA = s.slice(0, i).concat(s.slice(i + 1));
            const stringB = s
                .slice(0, s.length - 1 - i)
                .concat(s.slice(s.length - i));
            if (checkPal(stringA)) return i;
            if (checkPal(stringB)) return s.length - 1 - i;
            return -1;
        }
    }
  
    return -1;
}