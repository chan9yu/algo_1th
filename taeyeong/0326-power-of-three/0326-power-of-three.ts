function isPowerOfThree(n: number): boolean {
    // 기저 조건(Base Case) - 아 이 용어가 생각이 안나서 한참 고민했네..
    if (n <= 0) return false;

    // 3으로 나누어지는 동안 계속 나누기
    while (n % 3 === 0) {
        n = Math.floor(n / 3);
    }

    // 마지막에 1이 되면 3의 거듭제곱
    return n === 1;
};