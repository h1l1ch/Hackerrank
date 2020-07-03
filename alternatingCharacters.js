/*
HACKERRANK problem.
Title: "Alternating Characters"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/alternating-characters/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// Learned how to count mutating operations instead of performing them. Helps to optimize performance.
function alternatingCharacters(s) {
    let arr = s.split('');
    let answerAcc = 0;

    // 
    for (let i = 0; i < arr.length;) {

        // if new value is less than 0 => remove element from the array.
        if (arr[i] == arr[i + 1]) {
            answerAcc++;
        };

        i++;
    };

    console.log(answerAcc);
    return answerAcc;
};

const string = `AAAA`;
alternatingCharacters(string);