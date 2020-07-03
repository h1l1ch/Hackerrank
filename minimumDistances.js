// Find minimum distance between two exact values.
function minimumDistances(a) {

    // If no such distance exists return -1 as an answer.
    let answerFinal = -1;
    let answerTest;
    
    a.forEach((el1, index1) => {

        a.forEach((el2, index2) => {

            // Check if elements are exact but located on different places.
            if (el1 == el2 && index1 !== index2) {

                // Testing answer will be commited if it is smaller than old Final answer.
                answerTest = Math.abs(index1 - index2);
                if (answerTest < answerFinal || answerFinal == -1) {
                    answerFinal = answerTest;
                };
            };
        });
    });

    // Return the answer.
    return answerFinal;
};

const d = 3;
const string = `7 1 3 4 1 7`
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));

minimumDistances(arrNum);