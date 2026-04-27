// -------- Closure Questions ----------

// Q.1) Write a function createCounter that returns an object with increment and getCount methods. The count should not be accessible or modifiable from the outside.

/*
function createCounter () {
    let count = 1;

    return {
        getCount: () => {
            return count;
        },
        increment: () => {
            count ++;
        }
    }
}

let count = createCounter();
count.increment();
count.increment();
console.log(count.getCount());
console.log(count.count)
*/



// Q.2) Write a function add that can be called like this: add(1)(2)(3)...(n). It should return the sum when it is eventually treated as a value (usually by calling .valueOf() or implicitly in a string context, though in modern interviews,

// function add(a) {
//     return function(b){
//         if(b) {
//             return add(a + b);
//         }

//         return a;
//     }
// }


// console.log(add(2)(4)(6)());



// Q.3) "Imagine you have a function that takes a long time to run (like a heavy mathematical calculation or a data filter). Every time we call it with the same input, it wastes CPU power recalculating the same result.

//  Task: Write a wrapper function that 'remembers' the results of previous inputs so that if we ask for the same thing twice, it gives us the answer instantly from memory."

// Todo - write a function take another fn as argument , and in closre function take args if the argeument is already given so no need to do the calculation, simply return if not present do calculation

function remember (fn) {
 
    const cache = {};

   return function(...args) {
    let myKey = JSON.stringify(args);
     
       if(cache[myKey]){
        console.log("caching...")
        return cache[myKey];
       }

        console.log("calculating ....")
       const res = fn(...args);
       cache[myKey] = res;

       return res;
   }
}


let myFn = (a, b) => a * b;
const memoizedProd = remember(myFn);

console.log(memoizedProd(10, 20));
console.log(memoizedProd(10, 20));
console.log(memoizedProd(30, 20));
console.log(memoizedProd(15, 20));
