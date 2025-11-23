function hammingWeight(n: number): number {
    let count = 0

    for(const digit of n.toString(2)) {
        if(!!Number(digit)) count+=1
    }

    return count
};

// 비트 연산자 풀이
// function hammingWeight(n: number): number {
//   let count = 0;
//   while (n !== 0) {
//     n &= n - 1;   // (1) 가장 오른쪽 1을 하나 제거
//     count++;     // (2) 제거된 1의 개수 증가
//   }
//   return count;
// }