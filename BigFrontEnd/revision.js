// Write a code to find a unrepeated subsstring.

let myStr = "pwwkew";
let longest = "";

for(let i=0; i<myStr.length; i++) {
    let current = "";

    for(let j=i; j<myStr.length; j++) {
        if(current.includes(myStr[j])) {
            break;
        }

        current += myStr[j];

        if(current.length > longest.length){
            longest = current;
        }
        
    }
}

console.log(longest);