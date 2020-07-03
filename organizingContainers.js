function organizingContainers(container) {
    console.log(container)

    const arrTypesTotal = []; // Stores total number of balls of each type.
    const arrBallsInBoxes = []; // Stores total number of balls in each box.

    // Set intial set of values.
    let answer = `Possible`;

    container.forEach(el => {
        let totalBalls = el.reduce((acc, cur) => {
            return acc + cur;
        }, 0);

        arrBallsInBoxes.push(totalBalls);
    });

    let arrBallsInBoxesSorted = arrBallsInBoxes.sort();

    console.log(arrBallsInBoxes);

    for (let i = 0; i < container.length;) {
        arrTypesTotal[i] = 0;

        container.forEach(el => {
            return arrTypesTotal[i] += el[i];
        });

        i++;    
    };

    let arrTypesTotalSorted = arrTypesTotal.sort();

    if (arrTypesTotalSorted.length === arrBallsInBoxesSorted.length) {
        for (let i = 0; i < arrTypesTotalSorted.length;) {
            if (arrTypesTotalSorted[i] != arrBallsInBoxesSorted[i]) {
                answer = `Impossible`;
                break;
            };
            i++;
        };
    };
    
    console.log(arrTypesTotal);
    return answer;
};