/*
HACKERRANK problem.
Title: "Strange Counter"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/strange-code/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function strangeCounter(t) {
    let currentTime = 1;
    let limitTime = 0;
    let timeLeft = t;
    let answer = 0;

    for (let cycle = 1; cycle <= 100;) {

        limitTime += 3 * Math.pow(2, cycle - 1);
        
        if (timeLeft <= limitTime) {
            answer = 3 * Math.pow(2, cycle - 1) - (timeLeft - currentTime);
            break;
        }
        
        currentTime += 3 * Math.pow(2, cycle - 1);
        cycle++
    };

    console.log(answer);
    return answer;
}

const time = 9;

strangeCounter(time);
