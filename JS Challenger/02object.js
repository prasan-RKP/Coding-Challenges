
// Q.1) Access Object Property Dynamically
/*
function getProp(obj, keyVal) {
   return obj[keyVal];
}

console.log(getProp({a: 42, b:34}, 'a'));
*/



// Q.2) Access Multiple Object Properties with Bracket Notation
/*

function getValues(obj, keys){
 let res = [];

 for (const keyEl of keys) {
   for (const key  in obj) {
       if(key === keyEl){
        res.push(obj[key]);
       }
   }
 }
 return res;
}

const user = {
  name: "Rahul",
  age: 25,
  city: "Delhi"
};

const result = getValues(user, ["name", "city"]);

console.log(result);
*/


// Q.3)Language Greeting Selector
/*
function getGreeting(langCode) {
   const greetings = {
    en: "Hello!",
    hi: "Namaste!",
    fr: "Bonjour!",
    es: "Hola!"
  };

  let ans;

  for (const key in greetings) {
       if(key === langCode){
         ans = greetings[key];
       }
  }

  return ans;
}

console.log(getGreeting('hii'));
*/


