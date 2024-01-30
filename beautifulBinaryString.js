/*
HACKERRANK problem.
Title: "Beautiful Binary String"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/beautiful-binary-string/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function beautifulBinaryString(b) {
    const arrStr = b.split(''),
        arr = arrStr.map((el, index) => parseInt(arrStr[index]));
    
    let answerAcc = 0;
    
    for (let i = 1; i < arr.length - 1;) {
        if (arr[i - 1] == 0 && arr[i] == 1 && arr[i + 1] == 0) {
            arr[i + 1] = 1;
            answerAcc++;
        };
        i++;
    };

    console.log(answerAcc);
    return answerAcc;
};


const string = `0100101010`;
beautifulBinaryString(string)