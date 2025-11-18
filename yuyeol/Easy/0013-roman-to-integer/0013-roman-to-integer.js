/**
 * @param {string} s
 * @return {number}
 */

const ROMAN = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentVal = ROMAN[s[i]];
        const nextVal = ROMAN[s[i+1]];

        if (nextVal > currentVal) {
            // 다음 값이 더 크면 (IV에서의 I나 CM에서의 C)
            // 현재 값(I나 C)을 빼준다.
            result -= currentVal;
        } else {
            // 다음값이 더 크지 않거나(정상적인 흐름) 다음값이 없으면
            // 현재 값을 더해준다.
            result += currentVal;
        }
    }
    return result;
};