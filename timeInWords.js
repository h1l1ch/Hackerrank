// Converts time in words.
function timeInWords(h, m) {
    // will store the answer.
    let string;

    // array of all possible numbers to be displayed according to English conventions.
    let nums = ["zero", "one", "two", "three", "four", 
        "five", "six", "seven", "eight", "nine", 
        "ten", "eleven", "twelve", "thirteen", 
        "fourteen", "fifteen", "sixteen", "seventeen", 
        "eighteen", "nineteen", "twenty", "twenty one", 
        "twenty two", "twenty three", "twenty four", 
        "twenty five", "twenty six", "twenty seven", 
        "twenty eight", "twenty nine"
    ];

    // all ifs for each individual case.
    if (m == 0) { 
        string = nums[h] + " o' clock "; 
    } else if (m == 1) {
        string = "one minute past " + nums[h]; 
    } else if (m == 59) {
        string = "one minute to " + nums[(h % 12) + 1]; 
    } else if (m == 15) {
        string = "quarter past " + nums[h];
    } else if (m == 30) {
        string = "half past " + nums[h];
    } else if (m == 45) {
        string = "quarter to " + nums[(h % 12) + 1]; 
    } else if (m <= 30) {
        string = nums[m] + " minutes past " + nums[h]; 
    } else if (m > 30) {
        string = nums[60 - m] + " minutes to " + nums[(h % 12) + 1]; 
    }
            
    return string;
};

timeInWords(81, 7, 11, 3339);