function equalizeArray(arr) {
    // Set intial set of values.
    let curEl = 0;
    let curIndex = 0;
    let curElLength = 0;
    let maxElLength = 0;

    // Sort array using method.
    arr.sort();
    console.log(arr)

    // Loop through sorted array: [0, 0, 0, 1, 1, 1, 2, 2]
    arr.forEach((el, index) => {

        // If new Element is a starting element. (with index zero) 
        if (index === 0) {

            // then assign current el and index values as the counting point values. 
            curEl = el;
            curIndex = index;
        };

        // If new element is different from counting point value. 
        if (el !== curEl) {
            curElLength = Math.abs(curIndex - index); 

            // Record whether new line's length is greater than old maximum length.
            if (curElLength >= maxElLength) {
                maxElLength = curElLength;
            };

            // then assign new counting point values.  
            curEl = el;
            curIndex = index;
        };
        
        if (index == arr.length - 1) {
            curElLength = Math.abs(curIndex - arr.length); 
            
            if (curElLength >= maxElLength) {
                maxElLength = curElLength;
            };
        };
    });

    // Answer is the number of cut elements.
    const answer = arr.length - maxElLength;
    console.log(answer)
    return answer;
};

const string = `95 95 95 33 95 95 33 33 33 95 33 95 95 95 95 95 95 95 95 95 95 95 95 33 33 95 95 95 95 33 33 33 95 33 33 33 33 33 95 95 95 95 95 33`;
const pass = string.split(' ');
equalizeArray(pass);