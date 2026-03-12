
//find the single integer in an array where every other integer appears twice.
/*

*/

let arr = [1, 2, 3, 2, 1];
let freq = {};

let res = "";


 for(let i=0; i<arr.length; i++){
    let num = arr[i];
    freq[num] = (freq[num] || 0) + 1;
 }


 for (const key in freq) {
     if(freq[key] === 1){
        res += key
     }
    
    
 }


 console.log(res);




 const count = () => {
    let count = 0;

    const func = function() {
        count ++;
        return count;
    }

    func.reset = function(){
        count = 0;
    }

    return func;
 }


 let fn = count();

 console.log(fn())
 console.log(fn())
 console.log(fn())
 console.log(fn())
 fn.reset();
 console.log(fn())
 console.log(fn())
 console.log(fn())
 console.log(fn())


 
 