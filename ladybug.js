/*
HACKERRANK problem.
Title: "Happy Ladybugs"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/happy-ladybugs/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// This is not hard challenge. Was solved only using mutipe gates to make code working.
function ladybug(a) {
    let answer = 'YES';
    let aNotSorted = [...a];
    a.sort();
    let accept = false;
    console.log(aNotSorted);

    for (let i = 0; i < a.length; i++) {
        if (a[i] == `_`) {
            accept = true;
            break;
        };
    };

    if (accept) {

        a.forEach((color, index) => {
            if (color != `_`) {
                if (index > 0 && color != a[index - 1]) {
                    if (color != a[index + 1]) {
                        answer = 'NO';
                    };
                };
                
                if (index == 0 && color != a[index + 1]) {
                    answer = 'NO';
                };
            }; 
        });

    } else if (!accept) {

        aNotSorted.forEach((color, index) => {
            if (index > 0 && color != aNotSorted[index - 1]) {
                if (color != aNotSorted[index + 1]) {
                    answer = 'NO';
                };
            };

            if (index == 0 && color != aNotSorted[index + 1]) {
                answer = 'NO';
            };
        });
    };

    if (a.length <= 1 && !accept) {
        answer = 'NO';
    }

    console.log(answer);
    return answer;
};

const string = `G`
const arr = string.split('');
const intArr = arr.map(el => parseInt(el));

ladybug(arr);