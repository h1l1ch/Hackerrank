

// Complete the dayOfProgrammer function below.
function sockMerchant(n, ar) {
    let matchPairs = 0;
    let checkArray = [];

    ar.forEach((el, i) => {
        let allow = true;

        checkArray.forEach(check => {
            if (el == check) {
                allow = false;
            };
        });

        if (allow) {
            let sockCalc = 1;
    
            ar.forEach((matchEl, j) => {
                if (el == matchEl && j > i) {
                    sockCalc++;
                };
            });
    
            let remainder = sockCalc % 2;
            matchPairs += (sockCalc - remainder) / 2;
            checkArray.push(el);
        };
    });

    console.log(matchPairs);
    return matchPairs;
};

const n = 10;
const string = `1 1 3 1 2 1 3 3 3 3`
const arr = string.split('');

sockMerchant(n, arr)