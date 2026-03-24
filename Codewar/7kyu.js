// Q.1) In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.

/*
// task - 1: multiply pairs
let twoDArr = [[15,18], [4,5], [12,60]];
let mulArr = [];

for (let i = 0; i < twoDArr.length; i++) {
    let mul = 1;
    for (let j = 0; j < twoDArr[i].length; j++) {
        mul *= twoDArr[i][j];
    }
    mulArr.push(mul);
}

console.log("Multiplication Array:", mulArr);

// task - 2: gcd and lcm
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// compute LCM of all numbers in mulArr
let lcmArr = mulArr.reduce((acc, num) => lcm(acc, num));

console.log("LCM of mulArr:", lcmArr);

// task - 3: final result
let res = 0;
for (let i = 0; i < mulArr.length; i++) {
    let val =  mulArr[i] - lcmArr[i];

}

console.log("Final Result:", res);

*/

// Q.2) Given an array, assume that from first to last item in the array, each implies the next (for example, in an array of three items p, q, and r: (p -> q) -> r). Return the boolean answer.
//If the array is empty, return None, null or a similar empty value.There will be no more than 8 variables in the array, and the array will contain only boolean values.

// inShort -> The logic is

/*
function implication(p, q){
    return !p || q;
}

function chainImplication(arr){
    if(arr.length === 0) return null;

    let result = arr[0];

    for(let i=0; i<arr.length; i++){
        result = implication(result, arr[i]);
    }
    return result;
}

console.log(chainImplication([false, true]))

*/

// Q.3) For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).

//If input does not contain 'and' or 'but', return the same string. If a blank string, return ''.

//If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).

// ExpInput -> 'It was great and I've never been on live television before but sometimes I don't watch this.'
// ExpOutput ->'It was great and apparently I've never been on live television before but apparently sometimes I don't watch this.'

/*

function apprently(string){
   let strArr = string.split(" ");

   for(let i=0; i<strArr.length; i++) {
      if((strArr[i] === "but") ||(strArr[i] === "and")){
            strArr[i+1] = "apparently";
      }
   }

   return strArr.join(' ');
}

let str = "It was great and I've never been on live television before but sometimes I don't watch this."


console.log(apprently(str));

*/

//Q.4) String Reordering
/*
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]


Output:
'Vatsan took his dog for a spin'

*/

// ----- Answer -> Q.4-----
/*

function sentence(objList){
   return objList
              .sort((a,b)=> Number(Object.keys(a)[0]) - Number(Object.keys(b)[0]))
              .map(obj => Object.values(obj)[0])

}

console.log(sentence([
  {'4': 'dog'}, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
]))

*/

// Q.5) Task Given a Divisor and a Bound , Find the largest integer N , Such That ,

//Conditions :
//N is divisible by divisor

//N is less than or equal to bound

//N is greater than 0.

/*

const maxMultiple = (divisor, bound) => {
    //let ans = [];
    let ans ;
     for (let i=1; i<=bound; i++) {
        if((i % divisor === 0) && (i <= bound) && (i > 0)){
            //ans.push(i);
            ans = i
        }
     }

     return ans;
}


console.log(maxMultiple(2, 7));
console.log(maxMultiple(10, 50));
console.log(maxMultiple(37, 200));

*/

// Q.6) Minimize Sum Of Array (Array Series #1)
// -> concept suppose 5 elmensts in an array we have return the minimun result of unique elemnts multiplication.

/*
const minSumArr = (arr) => {
  let sortArr = arr.sort((a, b) => b - a);
  console.log(sortArr);

  let minVal = 0;
  let length = arr.length;
  for (let i = 0; i < sortArr.length / 2; i++) {
    minVal += (sortArr[i]) * (sortArr[length - 1 - i]); // 26 * 3
  }

  return minVal;
};

console.log(minSumArr([12, 6, 10, 26, 3, 24]));
console.log(minSumArr([9, 2, 8, 7, 5, 4, 0, 6]));
console.log(minSumArr([5, 4, 2, 3]));
*/

// Q.7) Product Of Maximums Of Array (Array Series #2)
// see the concept is we have to find the max multiplication value upto the size like array length 5 is and size = 2 so wenned to store 3 hghest number's val inside the result;
/*
const maxProduct = (numbers, size) => {
    let sortArr = numbers.sort((a, b)=> b-a);
    let slicedArr = sortArr.slice(0, size);

    let res = 1;
    for (const el of slicedArr) {
         res = res * el;
    }
    return res;
}


console.log(maxProduct([10 , 10 , 8 , 4 , 3, 2, 1], 5));

*/

// Q.8) Array Leaders (Array Series #3)
// ex - 1 arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4} -> return the elements which value is greter than all its right to it .
// ex- 2 arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}

/*

const arrayLeader = (nums) => {
  let resArr = [];
  for (let i = 0; i < nums.length; i++) {
    let chooseEl = nums[i];
    let newArr = nums.slice(i + 1);
    let sum = 0;
    for (let j = 0; j < newArr.length; j++) {
      sum += newArr[j];
    }

    if (chooseEl > sum) {
      resArr.push(chooseEl);
    }
  }

  return resArr;
};

console.log(arrayLeader([1, 2, 3, 4, 0])); // 4
console.log(arrayLeader([16, 17, 4, 3, 5, 2]));// 17, 5, 2
console.log(arrayLeader([5, 2, -1])); // 5, 2


*/


// Q.9)Nth Smallest Element (Array Series #4)
/*
function nthSmallest(arr, pos) {
  let sortArr = arr.sort((a, b) => a - b);
  console.log(sortArr);

  let val = sortArr[pos - 1];  // adjust for 0-based index
  
  return val;
}

console.log(nthSmallest([15,20,7,10,4,3], 3));

*/


// Q.10)Maximum Gap (Array Series #4)

/*
const maxGap = (numbers)  => {

  let sortArr = numbers.sort((a,b)=> a-b);

  let res = [];
  // 2, 5, 9, 10, 13 // 3, 4, 1, 3

  for(let i=1; i<sortArr.length; i++){
     res.push(sortArr[i] - sortArr[i-1]);
  }

  return Math.max(...res);
}

console.log(maxGap([13,10,5,2,9])); // 4
console.log(maxGap([-3,-27,-4,-2])); // 23
console.log(maxGap([-7,-42,-809,-14,-12])); // 767

*/
