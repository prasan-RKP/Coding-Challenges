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

console.log(romanToInteger("MCMXCIX")); // 1999

console.log(romanToInteger("MCMXCIX")); 
// 1999

