/*
HACKERRANK problem.
Title: "Flatland Space Stations"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/flatland-space-stations/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function flatlandSpaceStations(n, c) {
    let maxDist = 0;
    c.sort((a, b) => a - b);

    for (let i = 0; i < c.length; i++) {
        let currentDist = Math.floor((c[i + 1] - c[i]) / 2);

        if (currentDist > maxDist) maxDist = currentDist;

        if (i == 0 && (c[i] > maxDist)) maxDist = c[i];

        if ((i == c.length - 1) && (n - 1 - c[i]) > maxDist) maxDist = n - 1 - c[i];
    };

    console.log(maxDist);
    return maxDist;
}

const arr = [68, 81, 46, 54, 30, 11, 19, 23, 22, 12, 38, 91, 48, 75, 26, 86, 29, 83, 62];
const n = 95;

flatlandSpaceStations(n, arr);