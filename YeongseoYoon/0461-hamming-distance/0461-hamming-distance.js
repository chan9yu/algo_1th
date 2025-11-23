/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y; // x와 y의 비트 XOR 연산 수행
    let distance = 0;  // 해밍 거리 초기화
    
    while (xor > 0) {
        distance += xor & 1; // 마지막 비트가 1이면 거리 증가
        xor >>= 1;           // 비트 오른쪽으로 이동
    }
    
    return distance; 
};