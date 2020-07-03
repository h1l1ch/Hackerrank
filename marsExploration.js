/*
HACKERRANK problem.
Title: "Mars Exploration"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/mars-exploration/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function marsExploration(s) {
    const arr = s.split('');
    let answerAcc = 0;
    
    for (let i = 1; i < arr.length;) {

        if (arr[i] !== `O`) {
            answerAcc++;
        }

        if (arr[i - 1] !== `S`) {
            answerAcc++;
        }

        if (arr[i + 1] !== `S`) {
            answerAcc++;
        };

        i += 3;
    };

    console.log(answerAcc);
    return answerAcc;
};

const string = `SOSSPSSQSSOR`;

marsExploration(string);