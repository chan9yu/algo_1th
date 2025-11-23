/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let num1 = x.toString(2)
    let num2 = y.toString(2)

    num1 = num1.padStart(num2.length, '0')
    num2 = num2.padStart(num1.length, '0')
    
    let result = 0;

    for (let i = 0; i < num1.length; i++) {
        if (num1[i] !== num2[i]) result += 1
    }
    return result
};