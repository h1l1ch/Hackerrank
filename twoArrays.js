/*
HACKERRANK problem.
Title: "Permuting Two Arrays"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/two-arrays/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function twoArrays(k, A, B) {
    let answer = `YES`;
    let Adash = [];
    let Bdash = [];

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);



    for (let i = 0; i < A.length;) {
        Adash.push(A[i]);

        for (let j = 0; j < B.length;) {

            if (B[j] >= k - A[i]) {
                Bdash.push(B[j]);
                B.splice(j, 1);
                break;
            }
            j++;
        };
        i++;
    };

    if (Adash.length !== Bdash.length) {
        answer = `NO`;
    };

    console.log(answer);
    return answer;
};

let k = 5;
const stringA = `1 2 2 1`;
const arrA = stringA.split(' ');
const A = arrA.map((el, index) => parseInt(arrA[index]));
const stringB = `3 3 3 4`;
const arrB = stringB.split(' ');
const B = arrB.map((el, index) => parseInt(arrB[index]));

twoArrays(k, A, B);