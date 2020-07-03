function viralAdvertising(n) {
    let i;
    let peopleReceived = 5;
    let peopleLikedTotal = 0;

    for (i = 1; i <= n; i++) {
        let peopleLikedToday = Math.floor(peopleReceived / 2);
        peopleLikedTotal += peopleLikedToday;
        peopleReceived = peopleLikedToday * 3;
    };

    console.log(peopleLikedTotal)
    return peopleLikedTotal;
};

viralAdvertising(3)