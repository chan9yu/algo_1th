/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const xor = x ^ y;
   
    return xor.toString(2).split('1').length -1;
};