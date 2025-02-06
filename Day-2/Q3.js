const testAsyncFunction = () => {

return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('Test Resolve');
    } else {
        reject('Test Reject');
    }
}).catch((err) => {
    console.log('Error caught in testAsyncFunction: ', err);
    });
};  

testAsyncFunction()
    .then((res) => {
    console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));

//OUTPUT:
//Response in then block:  Test Resolve (when a number greater than 0.5 is executed)
//In case of reject, Error in catch block:  Test Reject (when a number less than or equal to 0.5 is executed)
