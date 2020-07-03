function kaprekarNumbers(p, q) {
    const answerArr = [];
    if (p === 1) {
        answerArr.push(1);
    }

    for (let number = p; number <= q; number++) {

        let numberSqr = number * number;
        let numberArr = `${number}`.split('');
        let numberArrPure = numberArr.map(el => parseInt(el));
        let numberSqrArr = `${numberSqr}`.split('');
        let numberSqrArrPure = numberSqrArr.map(el => parseInt(el));
        
        let d = numberArrPure.length;
        const l = [];
        const r = [];
        
        for (let i = 1; i <= numberSqrArrPure.length; i++) {

            if (i <= numberSqrArrPure.length - d) {
                l.push(numberSqrArr[i - 1]);
            } else {
                r.push(numberSqrArr[i - 1]);
            };
        };

        let lJoined = l.join('');
        let rJoined = r.join('');
        
        
        let lNum = parseInt(lJoined);
        let rNum = parseInt(rJoined);

        if (lNum + rNum === number && rNum !== 0) {
            answerArr.push(number);
        };
    };

    let answerString = answerArr.join(' ');

    if (answerArr.length === 0) {
        answerString = `INVALID RANGE`;
    };

    console.log(answerString);
    return answerString;
};

const n = 10;
const string = `1 1 3 1 2 1 3 3 3 3`
const arr = string.split('');

kaprekarNumbers(100, 300);