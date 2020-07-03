/*
In this challenge, print your array every time your partitioning method finishes, 
i.e. whenever two subarrays, along with the pivot, are merged together.

* The first element in a sub-array should be used as a pivot.
* Partition the left side before partitioning the right side.
* The pivot should be placed between sub-arrays while merging them.
* Array of length 1 or less will be considered sorted, and there is no need to sort or to print them.
*/

// Code to perform the partition as mentioned in above steps:
function partition(items, left, right) {
    var pivot = items[0], //middle element
        i = left, //left pointer
        j = right; //right pointer
        
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

// Code to swap two numbers in JavaScript:
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

// Perform the recursive operation.
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// first call to quick sort
var result = quickSort(items, 0, items.length - 1);

const string = `-13 68 -43 -71 -39 -10 40 -49 -19 -3 -70 -62 -76 -94 -73 64 72 -5 88 2 -63 92 -40 16 49 47 -86 -51 -9 -14 96 74 -22 -34 38 -12 6 63 19 -69 14 -90 -27 76 54 57 -87 -91 43 -92`;
const arr = string.split(' ');
const arrNum = arr.map((el, index) => parseInt(arr[index]));