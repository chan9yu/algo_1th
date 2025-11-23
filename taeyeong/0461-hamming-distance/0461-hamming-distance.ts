function hammingDistance(x: number, y: number): number {
  let z = x ^ y; // 다르면 1, 같으면 0
  let count = 0;

  while (z !== 0) {
    z &= (z - 1); // 1 하나 제거
    count++;
  }

  return count;
}