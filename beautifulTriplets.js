/*
HACKERRANK problem.
Title: "Beautiful Triplets"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/beautiful-triplets/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function beautifulTriplets(d, arr) {
    let ansAcc = 0;
    let k, bottomElement, centralElement, i, topElement, j;
    let topEl, btmEl; 

    for (i = 1; i < arr.length - 1; i++) {
        topEl = false;
        btmEl = false;
        centralElement = arr[i];
        for (k = 0; k < i; k++) {
            // 
            if (arr[k] === centralElement - d) {
                // Bottom Element = Central Element - difference
                bottomElement = arr[k];
                btmEl = true;

                for (j = i + 1; j < arr.length; j++) {

                    if (arr[j] === centralElement + d) {
                        // Top Element = Central Element + difference
                        topElement = arr[j];
                        topEl = true;
                        ansAcc++;
                    };
                };
            };
        };
    }

    return ansAcc;
};

const d = 3;
const string = `1 6 7 7 8 10 12 13 14 19`
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));

beautifulTriplets(d, arrNum);