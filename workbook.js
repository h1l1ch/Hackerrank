/*
HACKERRANK problem.
Title: "Lisa's Workbook"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/lisa-workbook/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// Nothing special. Straightforward task.

function workbook(n, k, arr) {
    const startPageArr = [];
    const endPageArr = [];
    let answerAcc = 0;
    
    for (let i = 0; i < arr.length;) {
        let tasksLeft = arr[i];
        let j = 0;
        
        while (tasksLeft) {
            let startingTask = 1 + k * j;
            startPageArr.push(startingTask);
            
            if (tasksLeft >= k) {
                tasksLeft -= k;
                let endingTask = startingTask + k - 1;
                endPageArr.push(endingTask);
            } else {
                let endingTask = startingTask + tasksLeft - 1;
                tasksLeft = 0;
                endPageArr.push(endingTask);
            }
            j++;
        }
        i++;
    };

    startPageArr.forEach((el, index) => {
        if (el <= index + 1 && endPageArr[index] >= index + 1) {
            answerAcc++;
        };
    });

    console.log(answerAcc);
    return answerAcc;
};

const n = 5;
const k = 3;
const stringA = `4 2 6 1 10`;
const arrA = stringA.split(' ');
const A = arrA.map((el, index) => parseInt(arrA[index]));

workbook(n, k, A);

