/*
HACKERRANK problem.
Title: "Extra long factorials"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/extra-long-factorials

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// Whole function is dedicated to finding factorial of number n
function extraLongFactorials(n) {
    // n - number, which factorial is expected to be extra long and initially displayed as e to the power of something.
    let factorial = 1n;

    for (let i = 1n; i <= n; i++) {
        factorial *= i;
    }

    console.log(`${factorial}`);
    
    return `${factorial}`;
};