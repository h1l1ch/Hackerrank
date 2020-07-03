/*
HACKERRANK problem.
Title: "Service Lane"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/service-lane/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// Nothing special. Straightforward task.

function serviceLane(width, cases) {
    console.log(width);
    console.log(cases);
    let answerArr = [];
    
    for (let i = 0; i < cases.length;) {
        let start = cases[i][0];
        console.log(start);
        let end = cases[i][1];
        console.log(end);
        let minNum = 0;
        
        for (let j = start; j <= end; j++) {
            console.log(width[j]);
            if (width[j] < minNum || !minNum) {
                minNum = width[j];
            };
        };

        i++;
        console.log(minNum);
        answerArr.push(minNum);
    };

    console.log(answerArr);
    return answerArr;
};

// const widthS = `2 3 1 2 3 2 3 3`;
// const widthA = widthS.split(' ');
// const width = widthA.map((el, index) => parseInt(widthA[index]));
const width = [ 1, 2, 2, 2, 1 ];
const cases = [ [ 2, 3 ], [ 1, 4 ], [ 2, 4 ], [ 2, 4 ], [ 2, 3 ] ];

serviceLane(width, cases);