
// Q.1) Find first non-repeating character

/*
const firstUnique = (s) => {
    let freq = {};

    // count frequency
    for (let c of s) {
        if (freq[c] !== undefined) {
            freq[c]++;
        } else {
            freq[c] = 1;
        }
    }

    // find first unique
    for (let c of s) {
        if (freq[c] === 1) return c;
    }

    return null; // if no unique character
}

console.log(firstUnique("aabcdd")); // "b"

*/


// Q.2) Implement throttle
/*
function throttle (fn, limit) {
    let last = 0;
    return function(...args){
        const now = Date.now();
        if(now - last >= limit){
            last = now;
            fn.apply(args);
        }
    };
}

*/


// Q.3) DeepClone an Object
/*
let arr = [{a:1},{b:2},{c:1}];

function groupBy (arr, key){
    for (const el of arr) {
        const myKey = Object.keys(el)[0];
        if(key === myKey){
            
        }
        else{
            myArr.push(el);
        }
    }

    return myArr;
};

console.log(groupBy(arr, 'b'));

*/


// Q.4) Find the longest common prefix string among an array of strings.

let strs = ["flower","flow","flight"];


function longestPrefix(strs = ["flower","flow","flight"]){
    let prefix = strs[0];

    for(let i=1; i<strs.length; i++) {
        while(!strs[i].startsWith(prefix)){
            prefix = prefix.slice(0, -1);

            if(prefix === "") return "";
        }
    }

    return prefix;
}

console.log(longestPrefix(strs));