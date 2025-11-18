/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const map = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50,
    'C': 100, 'D': 500, 'M': 1000
    };
  
    return s.split('').reduce((acc, char, i, arr) => {
        const current = map[char];
        const next = map[arr[i + 1]];
    
        return acc + (next && current < next ? -current : current);
    }, 0);
};