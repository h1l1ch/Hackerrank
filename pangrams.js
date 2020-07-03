/*
HACKERRANK problem.
Title: "Pangrams"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/pangrams/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function pangrams(s) {
    let arr = s.split('');
    let answer = `pangram`;
    let doesExist = false;
    let lowerCaseString = `abcdefghijklmnopqrstuvwxyz`;
    let lowerCaseArr = lowerCaseString.split('');

    let upperCaseString = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let upperCaseArr = upperCaseString.split('');

    for (let i = 0; i < lowerCaseArr.length; i++) {
        doesExist = false;
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] == lowerCaseArr[i] || arr[j] == upperCaseArr[i]) {
                doesExist = true;
            };
        };

        if (!doesExist) {
            answer = `not pangram`;
        };
    };

    console.log(answer);
    return answer;
};

const string = `We promptly judged antique ivory buckles for the prize`;
pangrams(string);