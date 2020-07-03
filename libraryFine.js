function libraryFine(d1, m1, y1, d2, m2, y2) {

    const daysDif = d1 - d2;
    const monthsDif = m1 - m2;
    const yearsDif = y1 - y2;
    let fine = 0;

    if (yearsDif >= 1) {
        fine = 10000 * yearsDif;
    } else if (monthsDif >= 1) {
        fine = 500 * monthsDif;
    } else if (daysDif >= 1) {
        fine = 15 * daysDif;
    };

    console.log(fine)
    return fine;
};
