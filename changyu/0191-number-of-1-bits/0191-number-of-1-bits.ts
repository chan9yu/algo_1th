function hammingWeight(n: number): number {
    let count = 0;

    while (n > 0) {
        n &= (n - 1);  // 가장 오른쪽 1 제거
        count++;
    }
    
    return count;
};