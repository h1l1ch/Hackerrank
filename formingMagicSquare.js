function formingMagicSquare(s) {
    // Write your code here

    // The value below stores all sums.
    const arrSum = []; 

    // Initial maximum sum.
    let maxSum = 0;

    // Array stores the line with the maximum sum.
    let lineMaxSum = [];

    for (j = 0; j <= 2; j++) {
        // Horixontal value is equal for each valueof the first line.
        let sumHor = s[0][0] + s[0][1] + s[0][2];
        
        if (sumHor >= maxSum) {
            maxSum = sumHor;
            lineMaxSum.push(...s[0][0], s[0][1], s[0][2])
        };
        
        // There are three values at the first line.
        // First value is the first case.
        if (j === 0) {
            let sumVer = s[0][0] + s[1][0] + s[2][0];
            
            if (sumVer >= maxSum) {
                lineMaxSum = [];
                maxSum = sumVer;
                lineMaxSum.push(...s[0][0], s[1][0], s[2][0])
            };
            
            let sumDiag = s[0][0] + s[1][1] + s[2][2];

            if (sumDiag >= maxSum) {
                lineMaxSum = [];
                maxSum = sumDiag;
                lineMaxSum.push(...s[0][0], s[1][1], s[2][2])
            };
        }
        
        // Second value is the second case.
        if (j === 1) {
            let sumVer = s[0][1] + s[1][1] + s[2][1];

            if (sumVer >= maxSum) {
                lineMaxSum = [];
                maxSum = sumVer;
                lineMaxSum.push(...s[0][0], s[1][0], s[2][0])
            };
        }
        
        // Third value is the last case.
        if (j === 2) {
            let sumVer = s[0][2] + s[1][2] + s[2][2];

            if (sumVer >= maxSum) {
                lineMaxSum = [];
                maxSum = sumVer;
                lineMaxSum.push(...s[0][2], s[1][2], s[2][2])
            };
            
            let sumDiag = s[0][2] + s[1][1] + s[2][0];

            if (sumDiag >= maxSum) {
                lineMaxSum = [];
                maxSum = sumDiag;
                lineMaxSum.push(...s[0][2], s[1][1], s[2][0])
            };
        }

        // Here we push recently found sums of values
        arrSum.push(sumVer, sumDiag);
    }

    // Here we find the maximum value number of which will remain unchanged.
    maxSum = Math.max(...arrSum)
}


formingMagicSquare(s);