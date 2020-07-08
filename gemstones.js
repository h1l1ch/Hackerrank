/*
HACKERRANK problem.
Title: "Gemstones"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/gem-stones/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
1) Launch given code only passing your own "array" value.
2) Copy&Paste code on Hackerrank to make sure it works.

Things I've learned:
* Sets as objects to store unique values. 
* Also started using .includes() array method. Though knew before started using only now.
*/

function gemstones(arr) {
    const uniqueSet = new Set();
    let uniqueArray = [];

    for (let i = 0; i < arr.length;) { 
        let arrChar = arr[i].split('');

        if (i === 0) {
            uniqueArray = [...arrChar];
        } 

        if (i !== 0) {
            let index = 0;
            while (index < uniqueArray.length) {
                if (!arrChar.includes(uniqueArray[index])) {
                    uniqueArray.splice(index, 1);
                } else {
                    index++;
                };
            };
        };
          
        i++;
    };
    
    for (let j = 0; j < uniqueArray.length;) { 
        uniqueSet.add(uniqueArray[j]);
        j++;
    };

    let answer = uniqueSet.size;
    return answer;
};


const string = `-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470`;
const arr = string.split(' ');
const arrNum = [ 'basdfj', 'asdlkjfdjsa', 'bnafvfnsd', 'oafhdlasd' ];
gemstones(arrNum);