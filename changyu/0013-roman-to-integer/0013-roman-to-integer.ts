function romanToInt(s: string): number {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = map[s[i]];
        let next = map[s[i + 1]];

        // 다음 값이 더 크면 → 빼기 (IV, IX, XL, XC, CD, CM)
        if (next > curr) {
            result -= curr;
        } else {
            result += curr;
        }
    }

    return result;
};