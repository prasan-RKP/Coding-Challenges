
// ----- Number Coding ----

// Q.10) Missing Number 
function missingNumber(arr) {
    const n = arr.length + 1; // because one number is missing
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

console.log(missingNumber([1,2,4,5,6])) // 3