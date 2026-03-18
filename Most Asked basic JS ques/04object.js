// Q.14) Deep clone object
const obj = { a: 1, b: { c: 2 } };
function deepClone(obj) {
  // way -1 let myobj =  structuredClone(obj)
  let myobj = JSON.parse(JSON.stringify(obj));
  return myobj;
}

console.log(deepClone(obj));

// Q.15) Do a debounce function

function debounce(fn, delay) {
  let timeId;
  return (...args) => {
    clearTimeout(timeId);
    timeId = setTimeout(() => fn(...args), delay);
  };
}



// Q.16) Currying a function

function add(a) {
    return function(b){
        return function(c){
            return a + b + c ;
        }
    }
}

const add3 = add(1);
const add2 = add3(2);
console.log(add2(3));

