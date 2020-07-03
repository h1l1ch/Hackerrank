function quickSortTwoArrays(n, arr) {

    const pivot = arr[0];
    const smallerArr = [];
    const greaterArr = [];
    const pivotArr = [pivot];

    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i] > pivot) {
            greaterArr.push(arr[i]);
        };

        if (arr[i] < pivot) {
            smallerArr.push(arr[i]);
        };
    };

    const arrAns = smallerArr.concat(pivotArr, greaterArr);

    console.log(arrAns);
    return arrAns;
};

const string = `-13 68 -43 -71 -39 -10 40 -49 -19 -3 -70 -62 -76 -94 -73 64 72 -5 88 2 -63 92 -40 16 49 47 -86 -51 -9 -14 96 74 -22 -34 38 -12 6 63 19 -69 14 -90 -27 76 54 57 -87 -91 43 -92`;
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));
quickSortTwoArrays(100, arrNum)