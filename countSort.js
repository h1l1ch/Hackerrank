/*
HACKERRANK problem.
Title: "The Full Counting Sort"
Difficulty: "Medium".
Link: https://www.hackerrank.com/challenges/countingsort4/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function countSort(arr) {
    for (let i = 0; i <= arr.length / 2 - 1;) { 
        arr[i][1] = `-`;
        i++;
    };
    arr.sort((a,b) => a[0] - b[0]);
    
    let arrAns = arr.map(el => el = el[1]);
    console.log(arrAns.join(' '));
    return arrAns.join(' ');
};

const array = [ [ '0', 'ab' ],
[ '6', 'cd' ],
[ '0', 'ef' ],
[ '6', 'gh' ],
[ '4', 'ij' ],
[ '0', 'ab' ],
[ '6', 'cd' ],
[ '0', 'ef' ],
[ '6', 'gh' ],
[ '0', 'ij' ],
[ '4', 'that' ],
[ '3', 'be' ],
[ '0', 'to' ],
[ '1', 'be' ],
[ '5', 'question' ],
[ '1', 'or' ],
[ '2', 'not' ],
[ '4', 'is' ],
[ '2', 'to' ],
[ '4', 'the' ] ]

countSort(array);