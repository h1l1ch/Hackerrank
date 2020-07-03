function pickingNumbers(a) {
    // Write your code here
    let answer = 0;
    let array = [];
    let aSorted = a.sort();
    console.log(aSorted);

    aSorted.forEach((number, index) => {
        array.push(number);

        aSorted.forEach ((exactNumber, j) => {

            if (j != index ) {
                if (exactNumber == number) {
                    array.push(exactNumber);
                };
                
                if (exactNumber == number + 1) {
                    array.push(exactNumber);
                }; 
            };
        });

        if (array.length > answer) {
            answer = array.length;
        };

        array = [];
    });

    console.log(answer);
    return answer;
};

const n = 10;
const string = `4 6 5 3 3 1`
const arr = string.split(' ');
const intArr = arr.map(el => parseInt(el));

pickingNumbers(intArr);