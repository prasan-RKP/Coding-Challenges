
// ------- String Question --------


// Q.6) Reverse string WITHOUT reverse()
// Input: "hello" → Output: "olleh"

/*
function reverseString(str) {
    let strArr = str.split('');
    let reverseStr = '';

    for(let i=strArr.length-1; i>=0; i--) {
           reverseStr += strArr[i];
    }

    return reverseStr;
}

console.log(reverseString("hello"));

*/


//Q.7) Check palindrome (ignore case/spaces)
// Input: "A man a plan a canal Panama" → Output: true
/*

function isPalindrome(str) { 
    let plainStr = str.replace(/\s+/g, "");
    let plainText = plainStr.toLowerCase();
    let plainTextRev = plainText.split("").reverse().join("");

    if(plainText === plainTextRev){
        return true;
    }
    
}

console.log(isPalindrome("A man a plan a canal Panama"))
*/



// Q.8) Count vowels
// Input: "hello world" → Output: 3
/*
function countVowels(str) {
    let count = 0;
    let vowel = 'aeiou';

    for (const el of str) {
          if(vowel.includes(el)){
            count++;
          }
    }

    return count;
 }

console.log(countVowels("hello world"));
*/


// Q.9)10. First non-repeating character
// Input: "aabbccdef" → Output: "d"

/*
function firstNonRepeating(str1) { 
    let obj = {};
    for (const el of str1) {
        if(obj[el]){
            obj[el]++;
        }
        else{
            obj[el] = 1;
        }
    }

    let minChar = ''
    for (const key in obj) {
         if(obj[key] === 1){
            minChar = key;
            break;
         }
    }

    return minChar;
}

console.log(firstNonRepeating("aabbccddef"));

*/



// Q.10) 
