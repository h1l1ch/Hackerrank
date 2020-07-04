/*
HACKERRANK problem.
Title: "Jumping on the Clouds: Revisited"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// Nothing special. Straightforward task.

function jumpingOnTheClouds2(c, k) {
    let energy = 100;
    const jumpLength = k;
    let finalCloudIndex = c.length - 1;
    
    for (let index = 0; index < 100;) {

        index += jumpLength;
        energy--;

        if (index > finalCloudIndex) {
            index = index - finalCloudIndex - 1;
        };

        if (c[index]) {
            energy -= 2;
        };

        if (index == 0) break;
    };
    
    console.log(energy)
    return energy;
};

const cS = `0 0 1 0 0 1 1 0`;
const cA = cS.split(' ');
const cAN = cA.map((el, index) => parseInt(cA[index]));
const k = 2;

jumpingOnTheClouds2(cAN, k);