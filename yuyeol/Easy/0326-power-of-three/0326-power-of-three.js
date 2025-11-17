/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 1) return true;
    if(n < 1) return false;
    let result = n;
    while(result !== 1) {
        if(result % 3 === 0) result = result / 3;
        else return false;
    }
    return true;
};