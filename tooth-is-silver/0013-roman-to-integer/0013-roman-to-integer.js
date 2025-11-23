/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const 예외 = { 'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 500, 'CM': 900}
    const 예외키 = Object.keys(예외)
    const 로마숫자 = { 'I':1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

    let result = 0;
    let idx = 0;
    
    // 예외키를 우선 교체
    for (let i = 0; i < 예외키.length; i++) {
        if (s.includes(예외키[i])) {
            const str = s.replace(예외키[i], '')
            result += 예외[예외키[i]]
            s = str
        }
    }
    // 이후에 계산
    console.log(s)
    for (let i = 0; i < s.length; i++) {
        result += 로마숫자[s[i]]
    }
    return result
};