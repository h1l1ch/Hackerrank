function quickSortMySolution(input) {
    let array = [];

    const loop = (items) => {

        let pivot = items[0];
        let left = [];
        let sortLeft = []
        let right = [];
        let sortRight = [];

        for (let i = 1; i < items.length; i++) {
        
            if (items[i] < pivot) {
                left.push(items[i]);
            };
    
            if (items[i] > pivot) {
                right.push(items[i]);
            };    
        };

        condition(left, sortLeft);
        let sortLeftString = sortLeft.join(' ').replace(',',' ');
        console.log(sortLeftString);
        
        condition(right, sortRight);
        let sortRightString = sortRight.join(' ').replace(',',' ');
        console.log(sortRightString);

        
        let answerString = `${sortLeftString} ${pivot} ${sortRightString}`;
        console.log(answerString);
        array = [...sortLeft, pivot, ...sortRight];
    };

    const swap = (items) => {
        let container = items[0];
        items[0] = items[1];
        items[1] = container;
    };

    const condition = (items, array) => {

        if (items.length > 2) {

            loop(items);
            console.log(`${items} are sorted items. Length > 2`);
            
        } else if (items.length == 2) {
            
            if (items[0] > items[1]) {
                swap(items);
                console.log(`${items} are sorted items. Length = 2`);
            };
            
            array.push(items);
            
        }  else if (items.length <= 1) {
            
            array.push(items);
        };
    };

    loop(input);
    
    array.sort();
    let arrayString = array.join(' ').replace(',',' ');
    console.log(arrayString);
    return array;
};


const string = `5 8 1 3 7 9 2`;
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));
quickSortMySolution(arrNum);
