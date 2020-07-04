function encryption(s) {
    
    // Set intial set of values.
    let stringArr = s.split('');
    let rows = Math.floor(Math.sqrt(stringArr.length));
    let columns;

    if (Math.floor(Math.sqrt(stringArr.length)) == Math.ceil(Math.sqrt(stringArr.length))) {
        columns = rows;
    } else {
        columns = rows + 1;
    };

    const sortedArr = [];
    const answerArr = [];

    // Increase rows' number if all characters do not fit.
    if (rows * columns < stringArr.length) rows += 1;

    // Loop through all the rows.
    
    console.log(stringArr.length);
        
    let i = 1; 

    stringArr.forEach((el, index) => {
        let row = [];
        

        if ((index + 1) % columns == 0 && i <= rows) {
            row = stringArr.slice(index - columns + 1, index + 1);

            // Each row must store number of characters equal to columns.
            sortedArr.push(row);
            i++;
        };

        if (index == stringArr.length - 1) {
            let startingPoint = stringArr.length - (stringArr.length % columns);
            row = stringArr.slice(startingPoint, index + 1);
            sortedArr.push(row);
        };
    });

    for (let i = 0; i < columns;) {
        answerArr[i] = [];

        sortedArr.forEach((el, index) => {
            answerArr[i].push(el[i]);
        });

        answerArr[i] = answerArr[i].join('');
        i++;
    };

    let answer = answerArr.join(' ');

    return answer;
};

const string = `wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny`;

encryption(string);