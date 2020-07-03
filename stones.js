/*
HACKERRANK problem.
Title: "Manasa and Stones"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/manasa-and-stones/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// This is not hard challenge. Was solved only using mutipe gates to make code working.
function stones(n, a, b) {
    const totalNums = n - 1;
    let answerArr = [];
    console.log(answerArr);
    
    for (let i = 0; i <= totalNums; i++) {
        let number = i * a + (totalNums - i) * b;
        answerArr.push(number);
    };
    console.log(answerArr);
    
    // To sort array in ascending order correctly. Used to be 300 -> 30; Now: 30 -> 300
    answerArr.sort((a, b) => a - b);
    console.log(answerArr);
    for (let i = 1; i < answerArr.length;) {
        if (answerArr[i] == answerArr[i + 1] || answerArr[i] == answerArr[i - 1]) {       
            answerArr.splice(i, 1);
        } else {
            i++;
        }
    }; 
    console.log(answerArr);

    console.log(answerArr);
    return answerArr;
};

const string = `G`
const arr = string.split('');
const intArr = arr.map(el => parseInt(el));

ladybug(arr);
stones(n, a, b);