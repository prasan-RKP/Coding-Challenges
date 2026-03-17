
// Q.1) Promise.all() with early rejection handling

/*
 function promiseAllSettled (promises) {
   
    return Promise.all(
        promises.map(p=> 
            Promise.resolve(p)
            .then(res => ({status: "fulfilled", res}))
            .catch(err => ({status: 'rejected', err}))
        )
    )
  
}


let promises = [
  Promise.resolve(22),
  Promise.reject("Error"),
  Promise.resolve(34),
  Promise.reject("Error-2")
];

promiseAllSettled(promises).then(results => console.log(results));

*/



// Q.2) Q2: Promise chain with dynamic promise creation


