// Q.1) Convert a callBack hell to a promise solution -> async/await

/*

function getUserData(callback) {
  getUser((user) => {
    getOrders(user.id, (orders) => {
      getOrderDetails(orders[0].id, (details) => {
        callback(details);
      });
    });
  });
}

// Via Promise

function getUserData() {
  return getUser()
    .then((user) => getOrders(user?.id))
    .then((orders) => getUserDetails(orders[0].id));
}


// via Async/await

async function getUserData(params) {
    let user = await getUser();
    let orders = await getOrders(user?.id);
    return getOrderDetails(orders[0].id);
}


*/


// Q.2) Implement Promise.all() from scratch

/*
const myPromiseAll = (promises) => {
    return new Promise((res, rej) => {
        if(!Array.isArray(promises)){
            return rej(new TypeError("Argument must be an Array"));
        }

        let results = [];
        let completed = 0;

        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
             .then(val => {
                results[idx] = val;
                completed++;

                if(completed === promises.length){
                    res(results);
                }
             })

             .catch(rej);
        })

    })
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

myPromiseAll([p1,p2,p3]).then(console.log);

*/



// Q.3) Implement .race() 

function myPromiseRace(promises) {
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(promises)){
            return reject(new TypeError("Arg must be  an array"));
        }


        promises.forEach(promise => {
            Promise.resolve(promise)
            .then(resolve)
            .catch(reject);
        })
    })
}