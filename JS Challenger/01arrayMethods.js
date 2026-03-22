// Q.1) Find the first Even Number

/*
let arr = [15, 13, 45, 24, 56, 66, 89];
let firstEvenNum = '';

for (const el of arr) {
    if(el % 2 === 0){
        firstEvenNum = el;
        break;
    }
};

console.log(firstEvenNum);

*/


// Q.2) Replace for loop with Array.find() to Get Object by Property Value.
/*
function findByProperty(arr, key, value) {
    return arr.find(item => item[key] = value);
}

const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Amit" }
];

const res = findByProperty(users, "id", 2);
console.log(res);
*/


// Q.3) Find Attribute of First Active User
/*
function getFirstActiveName(users) {

  let myUser = users.find(user => user.active === true);
  return myUser.name;
}


const users = [
  { name: "Rahul", active: false },
  { name: "Priya", active: true },
  { name: "Amit", active: true }
];

const firstActiveName = getFirstActiveName(users);

console.log(firstActiveName);

*/



// Q.4)  Return the Length of Each Word Using map
/*
function getWordsLength(words) {
    let lengthArr = words.map((word)=> word.length);
    return lengthArr;
}

console.log(getWordsLength(["heelo", "jump", "watermelon", "cucumber", "orange"]))

*/


// Q.5) Check if any Element is boolean
/*
let arr = [1,2,"hello", true, undefined];
 let res = ''
for (const el of arr) {
    if(el === true || el === false){
      res = `This is the boolean val -> ${el}`;
      break;
    }
}
console.log(res);
console.log()
*/


// Q.5) concate each uppercase char into in single Arr.
/*

let str = ['Apple', "Cat", "Net", "Ear"];
let storeArr = [];

for(let i=0; i<str.length; i++){
  let newArr = str[i].split('');
  for(let j=0; j<newArr.length; j++){
      let curEl = newArr[j];
      if(curEl === curEl.toUpperCase() && curEl !== curEl.toLowerCase()){
        storeArr.push(curEl);
      }
      else if(curEl === curEl.toLowerCase() && curEl !== curEl.toUpperCase()){
        continue;
      }
  }
}

console.log(storeArr.join(''));

*/


// Q.6) count occurance of value in an array
/*
let nums = [10, 8,8,21,8,67,78,8];
let obj= {};



for (const num of nums) {
   if(obj[num]){
    obj[num]++;
   }
   else{
    obj[num] = 1;
   }
}

for (const key in obj) {
  console.log(`the Element ${key} has repeated ${obj[key]} times`)
}
console.log(obj);

*/


// Q.7) toggles booleans into a new array
/*
let flags = [true, true, true, true, false, false, false, false];
let arr = [];

for (const flag of flags) {
    arr.push(!flag);
}

console.log(arr);
*/


//Q.8)Sum All Even Numbers in an Array Using forEach
/*
let nums = [12, 13, 22, 8, 7, 4, 2, 1];
let sum= 0;

for (const num of nums) {
    if(num % 2 === 0) sum+= num; 
}

console.log(sum);
*/
