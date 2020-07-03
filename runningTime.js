function runningTime(n, arr) {
    // Initial set of values. Two containers to store variables. Also shifts counter.
    let container1;
    let container2;
    let shifts = 0;

    // Looping backwards. Sorting data in ascending order. One number is odd in the whole set of values.
    for (let i = 0; i <= arr.length - 2; i++) {

        // If iterated element is the last in the array and does not suit ascending order requirements. (which means last element is smaller than previous one)
        if (arr[i] > arr[i + 1]) {
            // Once the case when subsequent element is less than current shift happens.
            container1 = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = container1;
            shifts++;

            // Also the rest of the array must be looped through to perform and record other shifts.
            for (let j = i + 1; j >= 0; j--) {
                // Check whether any of subsequent elements is less than precedent.  
                if (arr[j] < arr[j - 1]) {
                    // Record each performed shift.
                    container2 = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = container2;
                    shifts++;
                };
            };
        };
    };

    return shifts;
};

const string = `2 1 3 1 2`;
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));
runningTime(100, arrNum)