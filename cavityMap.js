/*
Title: "Cavity Map"
// Remark: "cavity" is a pit.
HACKERRANK problem.

Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/cavity-map/problem
The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// To solve this problem code from surfaceArea challenge has been used.
function cavityMap(grid) {

    let array = [];  

    grid.forEach(el => {
        let arr = el.split('');
        let numbers = arr.map((el, index) => parseInt(arr[index]));
        array.push(numbers)
    });

    // Analyzes surrounding squares.
    const analyzeSurroundings = (vert, horz) => {
        let marker = true;

        let currentElement = array[vert][horz];
        // horz === array[vert].length - 1
        // vert === array.length - 1   
        if (horz === array.length - 1 || !horz || !vert || vert === array.length - 1) { // If element is not on the right edge & element on the right is deeper.
            marker = false;
        };

        if (horz !== array.length - 1 && horz && vert && vert !== array.length - 1) { // If element is not on the right edge & element on the right is deeper.
            
            if ((currentElement <= array[vert][horz - 1] || array[vert][horz - 1] == `X`) ||
               (currentElement <= array[vert][horz + 1] || array[vert][horz + 1] == `X`) ||
               (currentElement <= array[vert + 1][horz] || array[vert + 1][horz] == `X`) ||
               (currentElement <= array[vert - 1][horz] || array[vert - 1][horz] == `X`) 
            ) {
                marker = false;
            };
        };

        if (marker) {
            array[vert][horz] = `X`;
        };
    };

    const doubleLoop = (arr, callback) => {

        for (let i = 0; i < arr.length;) {

            for (let j = 0; j < arr[i].length;) {
                callback(i, j); 
                j++;
            };
            i++;
        };
    };

    doubleLoop(array, analyzeSurroundings); // Calculate each stone's price.

    for (let i = 0; i < array.length; i++) {

        let rowString = array[i].join('');
        console.log(rowString);
        array[i] = rowString;
    };

    console.log(array);
    return array;
};
const string = [];
cavityMap(string);