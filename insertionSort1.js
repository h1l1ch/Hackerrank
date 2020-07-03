function insertionSort1(n, arr) {
    let replacingVal;
    let arrAns;

    // Looping backwards. Sorting data in ascending order. One number is odd in the whole set of values.
    for (let i = arr.length - 1; i >= 0; i--) {

        // Check whether odd number is determined.
        if (!replacingVal) {
            // If not then check whether current number is odd.
            if (arr[i] < arr[i - 1]) {
                replacingVal = arr[i];
                arr[i] = arr[i - 1];
            };

        } else if (replacingVal) {
            // If yes then push the number towards its suitable position.
            if (replacingVal > arr[i - 1] || !arr[i - 1]) {
                arr[i] = replacingVal;

                // Print current array transformed into a string as required in a task.
                arrAns = arr.join(' ');
                console.log(arr);
                // Break the loop once the odd number is on its position.
                break;
            };
            arr[i] = arr[i - 1];
        };

        // Also print the line of numbers. It is required to print all intermediate steps.
        arrAns = arr.join(' ');
        console.log(arr);
    };

    // Return the answer.
    return arr;
};

const string = `2 3 4 5 6 7 8 9 10 1`;
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));
insertionSort1(100, arrNum)