function beautifulDays(i, j, k) {
    let answerAcc = 0;

    for (i; i <= j; i++) {
        let initialNumber = i;
        let numberString = `${i}`;
        let reversedString = numberString.split('').reverse().join('');
        let reversedNumber = parseFloat(reversedString);
        let diff = Math.abs(reversedNumber - initialNumber);

        if (diff % k == 0) {
            answerAcc++;
        };
    };

    console.log(answerAcc);
    return answerAcc;
};

beautifulDays(20, 23, 6);