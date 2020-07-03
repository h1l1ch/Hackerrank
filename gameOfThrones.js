/*
HACKERRANK problem.
Title: "Game of Thrones - I"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/game-of-thrones/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function gameOfThrones(s) {
    let answer = 'YES';
    let arr = s.split('');
    arr.sort();
    let char;
    let counter = 0;

    // If total length of the array is an even number simply check for pairs of characters.
    if (arr.length % 2 === 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== char) {
                // If any of characters does not have a pair => string is not an anagram of a palindrome.
                if (counter % 2 !== 0) {
                    answer = 'NO';
                }
                char = arr[i];
                counter = 0;
            };
            counter ++;
        };
    } else { // However if length is an odd number then string has one shot of not matching character.
        let singleOdd = 0; // Record total number of odd characters.
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== char) {
                if (counter % 2 !== 0) { 
                    singleOdd++;
                }
                char = arr[i];
                counter = 0;
            };
            counter ++;
        };

        if (singleOdd > 1) { // If there are more than one odd character => not an anagram for a palindrome.
            answer = 'NO';
        };
    };
        
    console.log(answer);
    return answer;
};

const string = `aaabbbb`;
gameOfThrones(string);