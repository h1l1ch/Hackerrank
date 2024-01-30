/*
HACKERRANK problem.
Title: "Big Sorting"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/big-sorting/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
Option 1: Launch given code only passing your own "array" value.
Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

const bigSort = (first, second) => { // 
    // The shorter character string is always numerically smaller than the longer one
    if (first.length < second.length) {
      // Returns negative answer in Array.sort() method to keep array unchanged.
      return -1
    }
    
    // The longer character string is always numerically bigger than the shorter one
    if (first.length > second.length) {
      // Returns positive answer in Array.sort() method to flip strings.
      return 1
    }

    // If lengths are equal, start checking individual digits, starting from the left
    let firstArr  = first.split("")
    let secondArr = second.split("")

    for (let idx = 0; idx < firstArr.length; idx++) {
      // Check individual digits of two numbers moving from left to the right. 
      // Finding what number converted into string is greater: first one or second?
      // Numbers have to be converted into arrays and looped because of the limited capacity of the machine to track enormous numbers.
      let digitFromFirst  = parseInt(firstArr[idx])
      let digitFromSecond = parseInt(secondArr[idx])

      if (digitFromFirst < digitFromSecond) {
        // Negative anser. No changes.
        return -1
      }

      if (digitFromFirst > digitFromSecond) {
        // Positive answer. Flip the numbers.
        return 1
      }
    }

    return 0
}

// Complete the bigSorting function below.
function bigSorting(unsorted) {
  return unsorted.sort(bigSort)
}