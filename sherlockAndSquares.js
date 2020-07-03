function sherlockAndSquares(a, b) {
    // Stores all instances.
    let totalSquares = 0;
    let sqr = 0;

    //{a, b} - range from a to b in which all squares need to be checked. 
    for (let i = a; i <= b;) {

        if ((i === sqr) || (sqr === 0 && Math.sqrt(i) % 1 === 0)) {
            // Checks if number is a square root.
            sqr = Math.pow((Math.sqrt(i) + 1), 2);
            totalSquares++;
            // Optimization requires bigger step to avoid each number's iteration.
            i += sqr - i;
        } else {
            i++;
        };

    };
    
    console.log(totalSquares);
    return totalSquares;
};

const a = 59;
const b = 999999922;
sherlockAndSquares(a, b);