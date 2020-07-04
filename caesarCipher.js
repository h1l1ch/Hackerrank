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

function caesarCipher(s, k) {
    const arr = s.split('');

    for (let i = 0; i < arr.length; i++) {
        let code = arr[i].charCodeAt(); // Used char codes for encryption.

        if (code >= 65 && code + k % 26 <= 90) arr[i] = String.fromCharCode(code + k % 26);
        if (code >= 97 && code + k % 26 <= 122) arr[i] = String.fromCharCode(code + k % 26);
        if (code <= 90 && code + k % 26 > 90) arr[i] = String.fromCharCode(k % 26 - (90 - code) + 65 - 1);
        if (code <= 122 && code + k  % 26 > 122) arr[i] = String.fromCharCode(k % 26 - (122 - code) + 97 - 1);
    };

    const ansStr = arr.join('');
    console.log(ansStr);
    return ansStr;
}

const string = `DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.`;
const k = 45;
caesarCipher(string, k);