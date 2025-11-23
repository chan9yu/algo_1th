function hammingWeight(n: number): number {
  
  // Brian Kernighan 알고리즘 방법의 풀이
  // n & (n-1) 은 n의 가장 오른쪽 1비트를 제거한다.
  // 위를 반복하면 전체 순회하는 것보다 더 적은 횟수가 필요하다
  
  let count = 0;

  while (n !== 0) {
    n &= (n - 1); // 가장 오른쪽의 1을 제거
    count++;
  }

  return count;
}