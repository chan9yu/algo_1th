/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function (n) {
    return n.toString(2).split('1').length - 1;
};