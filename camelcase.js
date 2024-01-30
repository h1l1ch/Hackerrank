/*
HACKERRANK problem.
Title: "Camel Case"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/camelcase/problem?h_r=internal-search

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function camelCase(s) {

    // Another task solved with REGEX.
    // Initially there is one word we have.
    let wordsCount = 1;

    // g - means global. [A-Z] - range from A to Z.
    const regex = /[A-Z]/g;
    let isPresent = regex.exec(s);


    // Loop through the entire string to find all CamelCases.
    while (isPresent) {
        // Regular expression is executed upon string s.
        isPresent = regex.exec(s);
        // With each camelCase the new word is started.
        wordsCount++;
    }

    console.log(wordsCount)
    return wordsCount;
};


const string = `AUzs-nV`;
camelCase(string);