/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
    // 해밍거리가 뭔데..
    const xor = x ^ y;  // 다른 비트만 1이 됨?
    return xor.toString(2).split('1').length - 1;
};