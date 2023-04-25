


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
