/*
HACKERRANK problem.
Title: "Beautiful Days at the Movies"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function beautifulDays(i, j, k) {
    let answerAcc = 0;

    while (i <= j) {
        let initialNumber = i,
            numberString = `${i}`,
            reversedNumber = parseFloat(numberString.split('').reverse().join('')),
            diff = Math.abs(reversedNumber - initialNumber);

        if (diff % k == 0) {
            answerAcc++;
        };
        i++
    };

    console.log(answerAcc);
    return answerAcc;
};

beautifulDays(20, 23, 6);