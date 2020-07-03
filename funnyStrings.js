/*
Title: "Funny String"
HACKERRANK problem.

Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/funny-string/problem
The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// Nothing difficult. Learned about ASCII values of characters & used charCodeAt() method to extract this value.
function funnyStrings(string) {
    let answer = `Funny`;
    let codesArr = [];
    let differencesArr = [];
    let stringArr = string.split('');
    stringArr.forEach((ch, index) => {
        let i = ch.charCodeAt();
        codesArr.push(i);
    });

    codesArr.forEach((el, index) => {
        if (index >= 1) {
            let difference = Math.abs(el - codesArr[index - 1]);
            differencesArr.push(difference);
        };
    });
    
    
    let codesArrReversed = [];
    let differencesReversedArr = [];
    let stringArrReversed = stringArr.reverse();
    stringArrReversed.forEach((ch, index) => {
        let i = ch.charCodeAt();
        codesArrReversed.push(i);
    });

    codesArrReversed.forEach((el, index) => {
        if (index >= 1) {
            let difference = Math.abs(el - codesArrReversed[index - 1]);
            differencesReversedArr.push(difference);
        };
    });

    for (let i = 0; i < differencesArr.length; i++) {
        if (differencesArr[i] !== differencesReversedArr[i]) {
            answer = `Not Funny`;
        }
    }

    console.log(answer);
    return answer;
};

const string = `bcxz`;
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));
funnyStrings(string);
