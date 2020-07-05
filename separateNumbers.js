/*
HACKERRANK problem.
Title: "Separate the Numbers"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/separate-the-numbers/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
1) Launch given code only passing your own "array" value.
2) Copy&Paste code on Hackerrank to make sure it works.

This problem forced me to generate mutiple conditions and also introduced me to the number upper limits JavaScript can recognize. 
The ceiling number is 9007199254740992 thus different procedure is generated for analyzing numbers over 9007199254740992. Check this procedure below.
All conditions are explained in details below.
*/ 

function separateNumbers(s) {
    let answer = `NO`; // Due to many conditions initial answer is "NO".
    const arr = s.split('');
    const arrNum = arr.map((el, index) => parseInt(arr[index])); // Get from compressed string an array of digits.
    let firstNumArr;
    let firstNum;
    let firstNumLengthLimit = Math.floor(arrNum.length / 2); // To make required sequence possible first element cannot be greater than half of array's length.

    for (let index = 0; index <= firstNumLengthLimit; index++) { // Loop through the numbers array. 
        firstNumArr = arrNum.slice(0, index + 1); // With each time cutting number is getting one digit bigger. [1, 2, 3, 4,] => [1] - 1st cut; [1, 2] - 2nd cut. 
        firstNum =  parseInt(firstNumArr.join('')); // Join all digits => [1, 2] => 12; [1, 2, 3] => 123 etc.
        
        if ((firstNumArr.length > 1 && firstNumArr[0] !== 0) || firstNumArr.length === 1) { // Check whether the first number starts with zero or not.
            let index1 = firstNumArr.length; // Starting index is an index followed afer first element.
            let oldNumArr = firstNumArr; 
            let oldNum = firstNum; // Current number is an old number /previous number.
    
            while (index1 < arrNum.length) { // Continue looping till it breaks or the array gets looped through.
                let cutLength = oldNumArr.length;
                
                if (oldNumArr[oldNumArr.length - 1] === 9 && oldNumArr[0] === 9) { // This condition is made if the old's first & last digits are 9's. This number may be 999 for example...
                    cutLength += 1;                                      // ... meaning subsequent number must have one extra digit. If old number is 999 then new number is 1000.
                    
                    for (let index2 = 1; index2 < oldNumArr.length - 1; index2++) { // Loop through all number's digits.
                        if (oldNumArr[index2] !== 9) { // Check whether they are are not 9's
                            cutLength -= 1; // If number is not 9 9 ... 9 9 => bring cutLength back to its old value...
                            break;          // ...break the loop
                        };
                    };
                };
                
                let newNumArr = arrNum.slice(index1, index1 + cutLength); 
                let newNum = parseInt(newNumArr.join('')); // New number will be compared to old number to check...

                if (oldNum >= 9007199254740992) { // Problem prepared extra large numbers which JavaScript unable to recognize. 
                    // To display the number correctly it must be split into two parts:
                    let lastDigit = arrNum.slice(index, index + 1); // * 1) Last digit.
                    let firstNumArrRest = arrNum.slice(0, index);   // * 2) The rest.
                    let firstNumRest = parseInt(firstNumArrRest.join('')); 
                    answer = `YES ${firstNumRest}${lastDigit}`;   // Extra long numbers start from 9007199254740992 thus procedure for finding the sequence changes.

                    if (oldNumArr.length === oldNumArr.length) { // First case scenario: comparing numbers are same length thus compare their arrays.

                        for (let index2 = 0; index2 < oldNumArr.length; index2++) { // All digits must be equal,
                            if (index2 < oldNumArr.length - 1 && oldNumArr[index2] !== newNumArr[index2]) {
                                answer = `NO`;
                                break;
                            } else if (index2 === oldNumArr.length - 1 && oldNumArr[index2] !== newNumArr[index2] - 1) {  // except the last digit. Its difference must be one.
                                answer = `NO`;
                                break;
                            };
                        };

                    } else { // Second case scenario: numbers have different lengths.

                        for (let index2 = 0; index2 < oldNumArr.length; index2++) {
                            if (oldNumArr[index2] !== 9) { // It is allowable only when the old (smaller) number is filled with 9s.
                                answer = `NO`;
                                break;
                            };
                        };
                    } 
                };
    
                if (oldNum !== newNum - 1) { // If the difference between comparable numbers is not 1 => sequence isn't possible.
                    break; // cut the loop.
                };
    
                if (index1 + newNumArr.length >= arrNum.length) { // If current iteration is the last iteration and while loop is about to 
                    if (answer === `NO`) {
                        answer = `YES ${firstNum}`;
                    };
                    break;                     // break naturally, number sequence is found.
                };
                
                oldNumArr = newNumArr; // By the end of each iteration old number is replaced by the value of current / new number.
                oldNum = newNum;
                index1 += oldNumArr.length; // Index's step is 
            };
        };

        if (answer !== `NO`) {
            break;
        };
    };

    console.log(answer);
    return answer;
};

const string = `90071992547409929007199254740993`;
separateNumbers(string)