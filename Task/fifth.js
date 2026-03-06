// Find the missing number in a sequence from 1..n.
//    Example: [1,2,3,5,6] → 4
function findMissingNumber(arr) {
    const n = arr.length + 1;
    console.log(`Expected length of sequence: ${n}`);
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

const sequence = [1, 2, 3, 5, 6];
const missingNumber = findMissingNumber(sequence);
console.log(`The missing number is: ${missingNumber}`);