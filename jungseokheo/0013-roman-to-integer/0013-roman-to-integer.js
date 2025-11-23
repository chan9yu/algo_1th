/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    let int = 0;
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let next = s[i + 1];
        
        if (roman[next] && roman[current] < roman[next]) {
           int = int + (roman[next] - roman[current]);
           i++;
        } else {
            int = int + roman[current]
        }
        
    }
    return int;
};