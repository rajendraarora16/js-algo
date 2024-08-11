


function getHelloWorld() {
  return new Promise((resolve, reject) => {
    let i = 12;

    setTimeout(() => {
      if ( i === 1) {
        resolve('Hello world');
      } else {
        reject("I am error");
      }
    }, 1000);
  });
}


// producing using "then" method
getHelloWorld()
  .then( res => console.log(res))
  .catch( error => console.log(error)); // error handling


// async/await

async function getAsyncCall() {
  console.log('calling');
  const result = await getHelloWorld();
  console.log(result);
}

getAsyncCall();


// -----------------------------------------------------------------------
// Types of Promise
//------------------------------------------------------------------------

const promise1 = new Promise((resolve, _reject) => setTimeout(() => resolve("promise 1 is resolved"), 500));
const promise2 = new Promise((_resolve, reject) => setTimeout(() => reject("promise 2 is rejected"), 800));
const promise3 = new Promise((resolve, _reject) => setTimeout(() => resolve("promise 3 is resolved"), 1000));


// returns whoever first is resolved
Promise.any([promise1, promise2, promise3])
    .then((value) => console.log("value:", value))
    .catch((error) => console.log("error: ",error));


// returns whoever first is resolved or rejected
Promise.race([promise1, promise2, promise3])
    .then((value) => console.log("value:", value))
    .catch((error) => console.log("error: ",error));


// returns once all the promise is resolved and rejected
Promise.allSettled([promise1, promise2, promise3])
    .then((value) => console.log("value:", value))
    .catch((error) => console.log("error: ",error));


// returns once all the promise is resolved if there is a rejection, 
// it stops immediately and returns a rejection
Promise.all([promise1, promise2, promise3])
    .then((value) => console.log("value:", value))
    .catch((error) => console.log("error: ",error));





