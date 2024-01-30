/*
HACKERRANK problem.
Title: "Caesar Cipher"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/caesar-cipher-1/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// Each letter has its own charater code. 
function caesarCipher(s, k) {
    const arr = s.split('');
    k = k % 26;

    for (let i = 0; i < arr.length; i++) {
        let code = arr[i].charCodeAt(); // Used char codes for encryption.

        if ((code >= 65 && code + k <= 90) || (code >= 97 && code + k <= 122)) arr[i] = String.fromCharCode(code + k);
        if ((code <= 90 && code + k > 90) || (code <= 122 && code + k > 122)) arr[i] = String.fromCharCode(k - (26 - code));
    };

    const ansStr = arr.join('');
    console.log(ansStr);
    return ansStr;
}

const string = `DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.`;
const k = 45;
caesarCipher(string, k);