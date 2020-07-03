function repeatedString(s, n) {

    // Regular expressions.
    let answerAcc = 0;
    const stringArr = s.split('');

    const regex = /(a)/g;
    let match = regex.exec(s);

    while (match) {
        answerAcc++;
        match = regex.exec(s);
        console.log(match);
    };

    answerAcc *= Math.floor(n / stringArr.length);
    console.log(stringArr);
    let restChar = n - stringArr.length *  Math.floor(n / stringArr.length);
    console.log(answerAcc);
    s = s.slice(0, restChar);
    console.log(s)

    
    match = regex.exec(s);
    while (match) {
        answerAcc++;
        match = regex.exec(s);
        console.log(match);
    };

    console.log(answerAcc);
    return answerAcc;
};

repeatedString(`aba`,10)