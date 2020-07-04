/*
HACKERRANK problem.
Title: "HackerRank in a String!"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function hackerrankInString(s) {
    let answer = `YES`;
    const regexHackerRank = /(h)+.*(a)+.*(c)+.*(k)+.*(e)+.*(r)+.*(r)+.*(a)+.*(n)+.*(k)+/g;

    let isReq = s.match(regexHackerRank);

    if (!isReq) answer = `NO`;

    console.log(answer);
    return answer;
};

const string = `hackerworld`;

hackerrankInString(string);