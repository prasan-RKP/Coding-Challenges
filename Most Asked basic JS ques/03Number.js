
// ----- Number Coding ----

// Q.10) Missing Number 
function missingNumber(arr) {
    const n = arr.length + 1; // because one number is missing
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

console.log(missingNumber([1,2,4,5,6])) // 



// Q.11) Fibonacci concept
/*
const makeFibonacci = (n) => {
    let first = 0;
    let second = 1;
    let third;
    let arr = [0, 1];

    for(let i=0; i<n; i++) {
        third = first + second; 
        arr.push(third); 
        first = second; 
        second = third; 
    }

    return arr;
}

console.log(makeFibonacci(6));

*/


