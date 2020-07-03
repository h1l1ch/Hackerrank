/*
HACKERRANK problem.
Title: "3D Surface Area"
Difficulty: "Medium".
Link: https://www.hackerrank.com/challenges/3d-surface-area/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function surfaceArea(A) {
    // Set of initial values. 
    let width;
    let height;
    let maxLayer = -1; 
    let currentLayer;
    let layerRecord = []; // Will store intermediate A results. Instead mutating A this array will be mutated.
    let priceCount = 0; // Calculates price.

    // Updates array values upon reaching new layer.
    const layerUpdate = (length, verticalIndex, horizontalIndex) => {
        A[verticalIndex][horizontalIndex] = length - 1;
    };

    // Difines Top layer.
    const calcMaxLayer = (length) => {
        if (length > maxLayer) {
            maxLayer = length;
        };
    };

    // Updates layerRecord array.
    const calcLayerRecord = (length, verticalIndex, horizontalIndex) => {
        if (length >= 0) {
            layerRecord[verticalIndex][horizontalIndex] = length;
        } else {
            layerRecord[verticalIndex][horizontalIndex] = 0;
        }
    };

    // Calculates total price of the stone. Its price is defined by the total number of its opened sides.
    const calcStonePrice = (length, vert, horz) => {
        let stonePrice = 0;

        // Does this element exist?
        if (layerRecord[vert][horz]) {

            // Check if any stone is attached to current stone's right side.
            if (horz === height - 1) { // If element is on the right edge no attachment is possible.
                stonePrice++;
            } else if (!layerRecord[vert][horz + 1]) { // If element on the right side doesn't exist => current stone's right side is opened. Incremenet the price.
                stonePrice++;
            };

            // Check if any stone is attached to current stone's bottom side.
            if (vert === width - 1) { // If element is on the bottom edge no attachment is possible.
                stonePrice++;
            } else if (!layerRecord[vert + 1][horz]) {
                stonePrice++;
            };
    
            // Check if any stone is attached to current stone's left side.
            if (!horz) { // If element is on the left edge no attachment is possible.
                stonePrice++;
            } else if (!layerRecord[vert][horz - 1]) {
                stonePrice++;
            };

            // Check if any stone is attached to current stone's top side.
            if (!vert) {
                stonePrice++;
            } else if (!layerRecord[vert - 1][horz]) {
                stonePrice++;
            };
        };

        // Increment total price by current's stone price.
        priceCount += stonePrice;
    };

    // Loops through 2D array. [i] - vertically counted index (from top to bottom). [j] - horizontally counted index (from left to right).
    const doubleLoop = (arr, callback, accessKey) => {

        for (let i = 0; i < arr.length;) {

            for (let j = 0; j < arr[i].length;) {
                callback(arr[i][j], i, j); // Calls function on each iterated element.

                // Used once to calculate width and height within the loop.
                if (accessKey == `calculate width & height`) {
                    width = arr.length;
                    height = arr[i].length;
                };
                j++;
            };
            i++;
        };
    };

    doubleLoop(A, calcMaxLayer, `calculate width & height`); // First function loops through parsed array & calculates Maximum Layer. Also calcs width & height.
    priceCount = 2 * width * height;

    // Loop to prepare new layerRecord array to store all A's values.
    for (let i = 0; i < width;) {
        layerRecord[i] = []; // Each element is an empty array.

        for (let j = 0; j < height;) {
            layerRecord[i][j] = 0; // Filled with 0's. 
            j++;
        };
        i++;
    };

    // Loop through all layers. In other words, climbing from bottom to the top calculating price on each layer.
    for (currentLayer = 1; currentLayer <= maxLayer;) {
        doubleLoop(A, calcLayerRecord); // Calculate layerRecord array.
        doubleLoop(A, calcStonePrice); // Calculate each stone's price.
        doubleLoop(A, layerUpdate); // Update each element's length upon going up.
        currentLayer++;
    };

    console.log(priceCount);
    return priceCount;
};

// Array with stones. You can add your own and check with your answers.
const array = [[94], [91], [97], [97], [100], [90], [95], [95], [93], [91]];
surfaceArea(array);