/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
    let str = n.toString(2);
    let hw = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") {
            hw++;
        }
    }
    return hw;
};