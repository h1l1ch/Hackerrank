function camelcase(s) {

    // Another task solved with REGEX.
    let wordsCount = 1;
    const regex = /[A-Z]/g;
    let isPresent = regex.exec(s);


    // Loop through the entire string to find all CamelCases.
    while (isPresent) {
        isPresent = regex.exec(s);
        wordsCount++;
    }

    console.log(wordsCount)
    return wordsCount;
};


const string = `AUzs-nV`;
camelcase(string);