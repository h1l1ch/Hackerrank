/*
HACKERRANK problem.
Title: "Ice Cream Parlor"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/icecream-parlor/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
1) Launch given code only passing your own "array" value.
2) Copy&Paste code on Hackerrank to make sure it works.

Things I've learned:
* First time set initial index for indexOf() method.
*/

function icecreamParlor(m, arr) {
    let unsortedArr = [...arr];
    arr.sort((a, b) => a - b);
    let ansVal1 = 0;
    let ansVal2 = 0;
    let j = 1;

    for (let i = 0; i < arr.length;) {
        if (arr[i] == m - arr[arr.length - j]) {
            ansVal1 = arr[i];
            ansVal2 = arr[arr.length - j];
            break;
        } else if (arr[i] < m - arr[arr.length - j]) {
            i++;
        } else if (arr[i] > m - arr[arr.length - j]) {
            j++;
        };
    };

    let ansCount1 = unsortedArr.indexOf(ansVal1) + 1;
    let ansCount2 = unsortedArr.indexOf(ansVal2) + 1;

    if (ansCount1 == ansCount2) {
        ansCount2 = unsortedArr.indexOf(ansVal2, ansCount1) + 1;
    }
    let ansArr = [ansCount1, ansCount2];
    ansArr.sort((a, b) => a - b);

    return ansArr;
};

const arrayString = `2 2 4 3`;
const arr = arrayString.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));
const m = 4;

icecreamParlor(m, arrNum);