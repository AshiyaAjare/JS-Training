const testAsyncFunction = () => {
    return Promise.reject('Test static reject');
};
      
testAsyncFunction()
    .then((res) => { console.log('Response in then block', res); })
    .catch((err) => console.log('Error in catch block', err));

//OUTPUT: Error in catch block Test static reject (The promise is not resolved, because promise is immediately rejected after creation)