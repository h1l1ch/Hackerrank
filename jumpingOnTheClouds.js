function jumpingOnTheClouds(c) {
    let jumpAcc = 0;

    for (let i = 0; i <= c.length - 1;) {

        if (c[i]) {
            i--;
        } else {
            i += 2;
            jumpAcc++;
        };
    }
    
    console.log(jumpAcc)
    return jumpAcc;
};

const string = `0 0 1 0 0 1 0`;
const pass = string.split(' ');
jumpingOnTheClouds(pass);