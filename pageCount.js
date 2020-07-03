function pageCount(n, p) {
    let turns = [0 , 0]; // [0] - towards, [1] - backwards.
    let optimalTurns = 0;
    
    turns[0] = Math.ceil((p - 1) / 2);

    if (n % 2 != 0) {
        turns[1] = Math.ceil((n - p - 1) / 2);
    } else {
        turns[1] = Math.ceil((n - p) / 2);
    };

    optimalTurns = Math.min(...turns);

    console.log(optimalTurns);
    return optimalTurns;
}

const n = 5;
const p = 4;

pageCount(n, p)