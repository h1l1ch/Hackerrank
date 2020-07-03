/*
HACKERRANK problem.
Title: "Marc's Cakewalk"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/marcs-cakewalk/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function marcsCakewalk(calorie) {
    calorie.sort((a, b) => b - a);
    let answerAcc = 0;

    calorie.forEach((el, index) => {
        answerAcc += el * Math.pow(2, index);
    });
};