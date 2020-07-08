function permutationEquation(p) {
    let x, y;
    let index;
    let arrayAnswer = [];
    
    for (index = 1; index <= p.length; index++) {
        x = index;
        p.forEach((el1, i1) => {
            if (el1 == index) {
                p.forEach((el2, i2) => {
                    if (el2 == i1 + 1) {
                        y = i2 + 1;
                        arrayAnswer.push(y);
                    }
                });
            };
        });
    };
    
    return arrayAnswer;
};

permutationEquation();
