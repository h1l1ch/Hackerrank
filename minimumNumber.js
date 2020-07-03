function minimumNumber(n, password) {
    // Task is solved with REGEX.
    let answer;

    // All given regexs'.
    const regexNum = /[0123456789]/;
    const regexLowerCase = /[a-z]/;
    const regexUpperCase = /[A-Z]/;
    const regexSpecialChar = /[!@#$%^&*()\-\+]/;

    // Transform string into array to calculate its length. Ought to be greater than 6.
    const arrPassword = password.split('');

    // Functions checks whether passed symbol's type is required. 
    const checkReq = (regex) => {
        let isReq = password.match(regex);
        return isReq ? isReq = 0 : isReq = 1;
    };

    // Check requirement for numbers, lower case & upper case characters, also special characters.
    let isNumbers = checkReq(regexNum);
    let isLowerCase = checkReq(regexLowerCase);
    let isUpperCase = checkReq(regexUpperCase);
    let isSpecialChar = checkReq(regexSpecialChar);

    // Calculate total needed number of symbols for password to fulfill the requirements.
    const charsMissing = isNumbers + isLowerCase + isUpperCase + isSpecialChar;

    // There are two primary conditions: length of password ought to be 6 + and all of required symbols must present at least in single quantity.
    if (arrPassword.length <= 2 || charsMissing < 6 - arrPassword.length) {
        answer = 6 - arrPassword.length;
    } else if (charsMissing >= 6 - arrPassword.length) {
        answer = charsMissing;
    } else {
        answer = 0;
    }

    console.log(answer)
    return answer;
};


const string = `AUzs-nV`;
minimumNumber(1, string);