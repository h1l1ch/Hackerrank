/*
HACKERRANK problem.
Title: "Fair Rations"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/fair-rations/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// Nothing special. Straightforward task.
function fairRations(A) {
    let answer = 0;

    let initLoafs = A.reduce((acc, cur) => {
        return acc + cur;
    }, 0); 

    if (initLoafs % 2 === 0) {

        for (let i = 0; i < A.length;) {
            
            if (A[i] % 2 !== 0) {
                A[i]++;
                A[i + 1]++;
                answer += 2;
            };
            i++;
        };
    } else {
        answer = `NO`;
    }

    console.log(answer);
    return answer;
};

const stringA = `2 3 4 5 6`;
const arrA = stringA.split(' ');
const A = arrA.map((el, index) => parseInt(arrA[index]));

fairRations(A);