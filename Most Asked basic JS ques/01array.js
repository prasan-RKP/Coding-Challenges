
// ----------- Array Coding Questions ---------

//Q.1) Remove duplicates from array
// Input: [1,2,2,3,4,4,5] → Output: [1,2,3,4,5]

/*
let arr2 = [];
function removeDuplicates(arr) { 
   // return [...new Set(arr)];

   for(let i=0; i<arr.length; i++) {
    if(arr2.includes(arr[i])){
        continue;
    }
    else{
        arr2.push(arr[i]);
    }
   }
   return arr2;
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));

*/




//Q.2) Find second largest number
// Input: [3,1,4,1,5,9,2,6] → Output: 6

/*

function secondLargest(arr) {
    let bigNum = arr[0];
    let secondBigNum;

    for(let i=1; i<arr.length; i++) {
          if(arr[i] > bigNum){ // 1 > 3
               secondBigNum = bigNum;
               bigNum = arr[i];
               
          } 
          else if(arr[i] > secondBigNum && arr[i] < bigNum){
            secondBigNum = arr[i];
          }
    }

    return secondBigNum;

 }


 console.log(secondLargest([3,1,4,1,5,9,2,6]));

 */



 // Q.3) Reverse array WITHOUT reverse()
// Input: [1,2,3,4] → Output: [4,3,2,1]

/*
function reverseArray(arr) { 

    let reverseStr = [];

    for(let i=arr.length-1; i>=0; i--){
        reverseStr.push(arr[i]); 
    }

    return reverseStr;
}


console.log(reverseArray([1,2,3,4]))

*/




// Q.4) Flatten nested array
// Input: [1,[2,3],[4,[5]]] → Output: [1,2,3,4,5]

/*
function flattenArray(arr) {
    const flattend = arr.flat(Infinity);
    return flattend;
 }

 console.log(flattenArray([1,[2,3],[4,[5]]]));

 */



 // Q.5) Most frequent element
// Input: [1,2,2,3,3,3,4] → Output: 3

/*

function mostFrequent(arr) { 
  let obj = {};

  for (const el of arr) {
      if(obj[el]){
        obj[el]++;
      }
      else{
        obj[el] = 1;
      }
  }

  let maxVal = Math.max(...Object.values(obj));
  return maxVal;
}

console.log(mostFrequent([1,2,2,3,3,3,4]))


*/


