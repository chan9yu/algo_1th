function isPowerOfThree(n: number): boolean {
  if(n === 1) return true
  if(!Number.isInteger(n) || n < 1) return false

  return isPowerOfThree(n/3)
};