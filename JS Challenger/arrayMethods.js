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


// Q.5) Add a new property to each object

