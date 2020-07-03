function superReducedString(string) {

    const arr = string.split('');

    for (let index = 0; index < arr.length;) {
        if (index == -1) {
            index = 0;
        }

        let el = arr[index];

        if (el == arr[index - 1]) {
            arr.splice(index - 1, 2);
        } else if (el == arr[index + 1]) {
            arr.splice(index, 2);
            index--;
        } else {
            index++;
        }
    };

    let arrString = arr.join('');
    
    if (arr.length == 0) {
        arrString = `Empty String`;
    };

    console.log(arrString);
    return arrString;
};


const string = `baab`;
superReducedString(string);