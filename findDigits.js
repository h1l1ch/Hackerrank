function findDigits(n) {

    // Create an array of separated digits of number n.
    const digitsArr = n.split(' ').map(digit => parseInt(digit));

    // Count of successful divisions.
    let divisionCount = 0;

    // Single loop to iterate through all digits.
    digitsArr.forEach(digit => {

        if (digit != 0) {
            if (n % digit == 0) {
                // If division is successful => increment count.
                divisionCount++;
            };
        };
    });

    console.log(divisionCount);
    
    return divisionCount;
};