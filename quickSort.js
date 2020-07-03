function quickSort(n, arr) {
    // Sort an array in such ay that all elements on the left of pivot number are less than pivot and all elements on the right are greater than pivot. 
    // First element of the array is a pivot number.
    const pivot = arr[0];
    let container;
    let arrAns;

    // Loop through all array elements.
    for (let i = 0; i <= arr.length - 1; i++) {
        
        // Procedure for the elements greater than pivot.
        if (arr[i] > pivot) {

            for (let j = arr.length - 1; j > i; j--) {
                
                if (arr[j] <= pivot) {
                    container = arr[j];
                    arr[j] = arr[i];
                    arr[i] = container;
                    break;
                };
            };
        
        // Procedure for the elements less than pivot.    
        } else if (arr[i] < pivot) {
            
            for (let j = 0; j < i; j++) {
                
                if (arr[j] >= pivot) {
                    container = arr[j];
                    arr[j] = arr[i];
                    arr[i] = container;
                    break;
                };
            };
        
        // Procedure for the pivot number.    
        } else if (arr[i] == pivot) {
            
            for (let j = arr.length - 1; j > 0; j--) {
                
                if (arr[j] < pivot) {
                    container = arr[j];
                    arr[j] = arr[i];
                    arr[i] = container;
                    break;
                };
            };

        }

        arrAns = arr.join(' ');
        console.log(`${arrAns}`);
    };

    // Return sorted array.
    return arrAns;
};

const string = `-13 68 -43 -71 -39 -10 40 -49 -19 -3 -70 -62 -76 -94 -73 64 72 -5 88 2 -63 92 -40 16 49 47 -86 -51 -9 -14 96 74 -22 -34 38 -12 6 63 19 -69 14 -90 -27 76 54 57 -87 -91 43 -92`;
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));
quickSort(100, arrNum)