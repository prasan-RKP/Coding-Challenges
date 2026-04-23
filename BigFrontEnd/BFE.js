// ----  Ayncchronous questions --------
// Q.1) Classic debounce
/*
function debounce(func, wait) {
  // your code here
  let timeId;
  return function(...args) {
   clearTimeout(timeId);
  timeId = setTimeout(()=> func(...args), wait);
  }
}

*/

// Q.2)  Create a simple store for DOM element
/*
class NodeStore {

  constructor () {
    this.store = {};
    this.id = 0;
  }
  set(node, value) {
      if(!node.__nodeStoreId){
        node.__nodeStoreId = ++this.id;
      }

      this.store[node.__nodeStoreId] = value;
  }
  get(node) {
      return this.store[node.__nodeStoreId];
  }
  has(node) {
    return node.__nodeStoreId !== undefined;
  }
}
  */

// Q.3) TO be not to Be
// Note here we use (Object.is()) instead of (===) for all test case to resolve
/*
function myExpect(input) {
  // your code here
  return { 
    tobe: (val) => val === input ? true : false,
    not: {
      tobe: (val) => val !== input ? true : false
    }
  }
}

let expect = myExpect(3);
console.log(expect.not.tobe(3)); // true
console.log(expect.not.tobe(4)); // false
*/

// Q.4) Roman to Intger
/*
function romanToInteger(str) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let res = 0;

  for (let i = 0; i < str.length; i++) {
   let current  = map[str[i]];
   let next = map[str[i + 1]];

   if(next > current) {
    //1000 > 100
    res -= current;
   }
   else{
       res += current;
   }

  }

  return res;
}

console.log(romanToInteger("MCMXCIX")); 
// 1999

*/

// Q.5) A Number Sequnce
// Question detial on Examples 
/*
n = 1  
Start with "1" (this is given as the first term).

n = 2  
Look at the previous term "1".
It has one 1 → so we write "11".

n = 3  
Look at the previous term "11".
It has two 1s → so we write "21".

n = 4  
Look at the previous term "21".
It has one 2, one 1 → so we write "1211".

n = 5  
Look at the previous term "1211".
It has one 1, one 2, two 1s → so we write "111221"
*/

// answer
/*
function getLength(n) {
  
  if(n<= 0 ) return "";
  // for n = 4;

  let res = "1"

 for(let step = 1; step < n; step ++) {
  let nextResult = "";
      for(let i=0; i<res.length; i++) {
        let count = 1;
        while(i + 1 < res.length && res[i] === res[i+1]){
          count ++;
          i++;
        }
        nextResult += count + res[i];
      }

      res = nextResult;
 }
 return res;
}

*/



// Q.6) Implemnt your Math.sqrt();

/*
function getSQRT(num){
  return Math.floor(Math.sqrt(num));
}
  */



// Q.7) Semver compare

/*

function compare (v1, v2) {

  let arr1 = Number(v1.split('.').map(Number));
  let arr2 = Number(v2.split('.').map(Number));

  let max = Math.max(arr1.length, arr2.length);

  for(let i=0; i<max; i++) {
    let el1 = arr1[i];
    let el2 = arr2[i];

    if(el1 > el2){
      return 1;
    }
    if(el1 < el2){
      return 2;
    }

    if(el1 === el2){
      return 0;
    }

  }
  
}

const arr1 = '15.11.3'.split('.').map(Number);
console.log(arr1);


*/


function createCounter() {
  let val = 0;

  return {
    get count() {
      return val++;
    }
  };
}

const counter = createCounter();

console.log(counter.count); // 0
console.log(counter.count); // 1
console.log(counter.count); // 2
              // 1
