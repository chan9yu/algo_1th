/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;

    while (n > 0) {
        n &= (n - 1);  // 가장 오른쪽 1 제거
        count++;
    }
    
    return count;
};