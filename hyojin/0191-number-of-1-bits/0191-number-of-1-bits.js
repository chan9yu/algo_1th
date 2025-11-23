/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const num = n.toString(2).split('');

    let result = 0;

    for(let i = 0; i < num.length; i++){
        if(num[i] === '1') result += 1;
    }

    return result;
};