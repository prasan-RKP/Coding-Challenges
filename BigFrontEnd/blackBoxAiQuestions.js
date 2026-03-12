/* Q.1)  Data Transformation (Array Methods)
Task: You have an array of user objects. Write a function that returns a new array containing only the names of users who are older than 18, sorted alphabetically.
*/

// Answer -1 

/*
const users = [
  { name: "Alice", age: 16 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 17 }
];
// Expected Output: ["Bob", "Charlie"]
let arr = [];

for (const man of users) {
     if(man.age > 18){
        arr.push(man.name);
     }
}

console.log(arr.sort());

*/



// Q.2) On DOM basis

/*

let inputFiled = document.getElementById("todo");

let ulElem = document.createElement("ul");
document.body.appendChild(ulElem);

inputFiled.addEventListener("change", (e)=>{
    if(e.target.value === '') return "";
     let liElem = document.createElement("li");
     let deleteBTn = document.createElement("button");
     deleteBTn.innerText = "Delete";

    //  const uid = Math.random().toString(36).substring(2,6);
     
    //  liElem.setAttribute()
     liElem.innerText = e.target.value;
     liElem.appendChild(deleteBTn);
     ulElem.appendChild(liElem);
     e.target.value  = "";

     deleteBTn.addEventListener("click",()=> {
        liElem.remove();
     })
})



*/



// Q.3) Basic API Handling
//Task: Write a function fetchUserData(userId) that fetches data from https://jsonplaceholder.typicode.com/users/${userId}.



/*
async function fetchUserData(userId) {

    try {

        let res = await fetch(`https://dummyjson.com/users/${userId}`);

        if (!res.ok) return alert("Network Error");

        let data = await res.json();

        return data;

    } catch (error) {
        console.log("Something went wrong");
    }

}

fetchUserData(2)
.then(res => console.log(res))
.catch(err => console.log(err));

*/


const fetchAllData  = async() => {
    const req1 = fetch("https://dummyjson.com/users/1").then(res => res.json());
    const req2 = fetch("https://dummyjson.com/users/2").then(res => res.json());
    const req3 = fetch("https://dummyjson.com/users/3").then(res => res.json());

    const allRequests = Promise.all([req1, req2, req3]);

    const timeout = new Promise((_, reject)=> 
        setTimeout(()=> reject("Request timeout 5s"), 5000)
    );

    return Promise.race([allRequests, timeout]);

    
} 

fetchAllData()
.then(res => console.log(res))
.catch(err => console.log(err));
