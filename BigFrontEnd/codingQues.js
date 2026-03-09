// -----------  Coding Begins

// Q.1) Given a string contaning only a, b and c, remove all b and ac.

/*
removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'
*/

/*
const removeChars = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      if (str[i + 1] === "c") {
        continue;
      } else {
        result += str[i];
      }
    } else if (str[i] === "b") {
      continue;
    } else {
      result += str[i];
    }
  }

  return result;
};

console.log(removeChars("abc"));


*/




// Q.2) Integer to Roman Numerials

/*
function integerToRoman(num) {
  const values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4, 1
  ];

  const symbols = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV", "I"
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    // IMP -> we use 'while' loop when we have multiple values  for the same index, we use if when we have multiple values for different index
    while (num >= values[i]) { // we use 
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
}


console.log(integerToRoman(3420));

*/




// Q.3) find the single integer in an array where every other integer appears twice.
/*
let arr = [1, 2, 3, 2, 1];
let unique;

for(let i=0; i<arr.length; i++){
    let count = 0;
    for(let j=0; j<arr.length; j++){
              if(arr[i] === arr[j]){ // 2
                count++;
              }
        }

        if(count === 1){
            unique = arr[i];
            break;
        }
}

*/


// Q.4) Please create a function count(), when called it should return how many times it has been called, count.reset() should also implemented.

// Here the main point is to use closure, we have to return a function which will have access to the count variable and also we have to add a reset method to that function which will reset the count variable to 0.

/*

const count = () => {
  let count = 0;

  const func = function() {
     count ++;
     return count;
  }

  func.reset = function() {
    count = 0;
  }

  return func;
}

const counter = count();

console.log(counter());
console.log(counter());
counter.reset();
console.log(counter());


*/



// Q.5) Semver String compare;
/*
// Questions description -> 

compare('12.1.0', '12.0.9')
// 1, meaning first one is greater
compare('12.1.0', '12.1.2')
// -1, meaning latter one is greater
compare('5.0.1', '5.0.1')
// 0, meaning they are equal.

=> so basically check the two string snd return the '1', '-1', '0' according to the above conditions.
*/