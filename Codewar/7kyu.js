
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


