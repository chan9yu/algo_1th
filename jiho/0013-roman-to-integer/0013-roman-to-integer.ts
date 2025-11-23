const SYMBOLS = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}

function romanToInt(s: string): number {
    let result = 0

    for(let i = 0; i < s.length - 1; i++) {
        const [cur, next] = [SYMBOLS[s[i]], SYMBOLS[s[i+1]]]

        if(cur < next) {
            result -= cur
        } else result += cur
    }

    return result + SYMBOLS[s.at(-1)]
};