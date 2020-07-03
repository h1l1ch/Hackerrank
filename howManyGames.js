function howManyGames(p, d, m, s) {
    // Set initial values of current value, total bought games and minimum price boundary.
    let currentValue = p;
    let gamesBought = 0;
    let minValue = m;
    
    // Loop until run out of money.
    for (let moneyLeft = s; moneyLeft >= currentValue;) {

        // Updated budget.
        moneyLeft -= currentValue;
        // Increment total bought games count.
        gamesBought++;
        
        // Check price reduction can happen. Price cannot drop below minimum set value.
        if (currentValue - d >= minValue) {
            currentValue -= d;

        } 
        // If current price minus reduction constant is lower than minimum value => current price becomes minimum price.
        else if (currentValue > minValue && currentValue - d < minValue) {
            currentValue = minValue;
        };
    };

    console.log(gamesBought);
    return gamesBought;
};

howManyGames(81, 7, 11, 3339);