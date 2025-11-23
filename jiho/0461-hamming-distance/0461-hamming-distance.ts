// function hammingDistance(x: number, y: number): number {
//     return (x^y).toString(2).split('1').length - 1
// };

function hammingDistance(x: number, y: number): number {
    let z = x^y
    let count = 0
    

    while(z > 0) {
        count += z & 1;
        z >>= 1; 
    }

    return count
};