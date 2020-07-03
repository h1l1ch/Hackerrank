function beautifulTriplets(d, arr) {
    let ansAcc = 0;
    let j = 0;

    // Stores numberType and total number under corresponding index. For example Type: 2, Count: 24; Type: 3, Count: 13 etc.
    const numObject = {
        numbersType: [],
        numbersCount: []
    };

    // Iterate through given array to organize all elements of given array. 
    for (let i = 0; i < arr.length; i++) {

        if (i == 0) {
            numObject.numbersCount[j] = 0;
            numObject.numbersType.push(arr[i]);
        } else if (arr[i] !== arr[i - 1]) {
            j++;
            numObject.numbersCount[j] = 0;
            numObject.numbersType.push(arr[i]);
        } 

        numObject.numbersCount[j]++;
    };

    console.log(numObject);
    
    // Loop through calculated object. 
    numObject.numbersType.forEach((el, index) => {

        // Only if number is not located on the edge it can be the middle number of the triplet. This is what we need.
        if (index !== 0 && index !== numObject.numbersType.length - 1) {
            // Define required bottom & top triplet number.
            let bottomEl = el - d;
            let topEl = el + d;
            
            // Initially set tehir index to falsy value.
            let bottomIndex = 0;
            let topIndex = 0;

            // Second loop through the object to find existence of bottom & top triplet numbers.
            numObject.numbersType.forEach((el1, index1) => {

                if (el1 === bottomEl) {
                    // Store bottom number's index. Add 1 in case bottom index is 0 to avoid logical errors (0 is falsy value).
                    bottomIndex = index1 + 1;
                };

                if (el1 === topEl) {
                    // Also store top triplet's index.
                    topIndex = index1;
                };
            });
    
            // Triplet exists if all three points (bottom, middle, top) exist in the array.  
            if (bottomIndex && topIndex) {

                // Find maximum combination of exact same triplets. Its maximum combination strictly depends on maximum number of triplet's points.
                let addition = Math.max(numObject.numbersCount[bottomIndex - 1], numObject.numbersCount[index], numObject.numbersCount[topIndex]);
                // Increment accumulator's value.
                ansAcc += addition;
            };
        };
    });

    console.log(ansAcc);
    return ansAcc;
};

const d = 3;
const string = `1 2 4 5 7 8 10`
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));

beautifulTriplets(d, arrNum);