/*
HACKERRANK problem.
Title: "Service Lane"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/chocolate-feast/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

// Nothing special. Straightforward task.

function chocolateFeast(initialMoney, barCost, wrapperForBar) { // n - initial
    // let initialMoney = n;
    // let barCost = c;
    // let wrapperForBar = m;
    let barsBought = 0;
    let curWrappers = 0;

    while (initialMoney >= barCost) {
        initialMoney -= barCost;
        curWrappers++;
        barsBought++;

        if (curWrappers === wrapperForBar) {
            curWrappers -= wrapperForBar;
            barsBought++;
            curWrappers++;
        };
    };

    console.log(barsBought);
    return barsBought;
};

chocolateFeast(6, 2, 2);