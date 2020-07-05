/*
HACKERRANK problem.
Title: "Find the Median"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/closest-numbers/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
1) Launch given code only passing your own "array" value.
2) Copy&Paste code on Hackerrank to make sure it works.

If you read this - the solved problem isn't difficult. Nothing to comment.
*/

function closestNumbers(arr) {
    arr.sort((a, b) => a - b); 
    let minDif;
    let answerArr = [];
    let endNum;
    let startNum = arr[0];
    
    const classicLoop = (array) => {

        for (let i = 1; i < array.length;) {
            endNum = array[i];
            let curDif = Math.abs(endNum - startNum);

            if (curDif <= minDif || !minDif) {
                minDif = curDif;
            }

            startNum = endNum;
            i++
        };
    };

    classicLoop(arr);

    for (let i = 1; i < arr.length;) {
        endNum = arr[i];
        let curDif = Math.abs(endNum - startNum);

        if (curDif === minDif) {
            answerArr.push(startNum);
            answerArr.push(endNum);
            // let str = answerArr[answerArr.length - 1].join(' ');
            // answerArr[answerArr.length - 1] = str;
        }

        startNum = endNum;
        i++
    };

    // let answerStr = answerArr.join(' ');
    return answerArr;
};


const string = `-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470`;
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));
closestNumbers(arrNum)