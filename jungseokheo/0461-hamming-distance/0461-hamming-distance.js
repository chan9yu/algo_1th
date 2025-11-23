/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
    return (x ^ y).toString(2).split("").filter(i => i === "1").length;
};