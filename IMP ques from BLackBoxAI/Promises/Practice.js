// --------- Prmoises Most important Ques ------

// Q.1) Promises with easy rejction 'Promise.all()'
/*
const promiseAllSettled = (promises) => {
    return Promise.all(
     promises.map((p)=> 
        p
       .then(res => ({status: "fulfilled", res}))
       .catch(err => ({status: "error", err}))  
    )
)
}

let promises = [
  Promise.resolve(22),
  Promise.reject("Error"),
  Promise.resolve(34),
  Promise.reject("Error-2")
];


promiseAllSettled(promises).then(res => console.log(res));

*/

// Q.2) Promise.all() with timeout handling

const promiseAllWithTimeout = (promises, timeout = 100) => {
  return Promise.all(
    promises.map((p) =>
      p
        .then(
          (res) =>
            new Promise((resolve) => setTimeout(() => resolve(res), timeout)),
        )
        .catch(
          (err) =>
            new Promise((resolve) => setTimeout(() => resolve(err), timeout)),
        ),
    ),
  );
};

let promises = [
  Promise.resolve(1),
  new Promise((resolve) => setTimeout(() => resolve(2), 50)),
  new Promise((resolve) => setTimeout(() => resolve(3), 150)),
];

promiseAllWithTimeout(promises).then(console.log);

let val2 = Promise.resolve(4);
let val = new Promise((res) => res(5));
val.then(res => console.log(res));
val2.then(res => console.log('val2', res))
