// Q.1) Longest Substring with At Most K Distinct Characters

//👉 Twist of classic problem
//👉 Input: "eceba", k = 2 → Output: 3

/*

let str = 'eceba';
let res = '';
let k=2;

for(let i=0; i<str.length; i++){
    let myRes  = '';
    let arr = [];
    for(let j=i; j<str.length; j++) { 
        let char = str[j];
        arr.push(char);

        if(arr.length-1 > k){
            break;
        }

        myRes += char;
    }

    if(myRes.length > res.length) {
        res = myRes ;
    }
}

console.log(res);
*/

// Q.2) Subarray Sum Equals K
//👉 Input: [1,2,3], k = 3 → Output: 2
/*

let Input = [1, 2, 3];
const k = 3;
let arrRange = 2;
let arr = [];
let res = [] ;

for(let i=0; i<Input.length; i++) {
  arr.push(Input.slice(i, i+arrRange));
     
};

console.log(arr);

for(let elArr of arr) {
   let sum = elArr.reduce((prev, curr)=>prev +curr,0);
   if(sum === k) {
     res.push(elArr);
   }
}


console.log(res.length);

*/


// Q.3) 

/*
let inpArr = [100, 4, 200, 1, 3, 2];
let sorArr = [...new Set(inpArr)].sort((a, b) => a - b);

let storeArr=[];
let last = sorArr[0];

for(let i=0; i< sorArr.length; i++){
    let first = sorArr[i];
    let second = sorArr[i+1];
    
    if(second - first === 1){
        storeArr.push(first);
        last = second; // 0, -1,
    }
    else{
        break;
    }
    
}
storeArr.push(last);
console.log(storeArr);
*/
// 1,2 -> 1
// 2,3 -> 1,2
// 3,4 -> 1,2,3;
// 4, 200 -> break;

// 1 === 1 => 1
// fi = second; fi=1,
//