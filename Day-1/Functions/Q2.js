// 2. Take a function that accepts a function as a parameter (also known as callback function). function test(callback){ 
//     callback(); 
//     } 
//     function callbackFunc(){ 
//     console.log(“Calling the callback function”) 
//     return 5; 
//     } 
//     Explore the following cases - what is printed in the console, and what gets returned: 
//     ○ test(callbackFunc) 
//     ○ test(callbackFunc()) 
//     ○ test(() => callbackFunc()) 
//     ○ What happens when you return callback() from the test function?
//     ○ What happens when you return callback from the test function?

function test(callback) {
    callback();
}

function callbackFunc() {
    console.log("Calling the callback function");
    return 5;
}


//CASE 1
test(callbackFunc);
//Output: Calling the callback function

//CASE 2
test(callbackFunc());
//Output:
// Calling the callback function
// TypeError: callback is not a function


//CASE 3
test(() => callbackFunc());
//Output: Calling the callback function


//CASE 4
function test(callback) {
    return callback();
}
console.log(test(callbackFunc));
// Output: Calling the callback function
// 5


function test(callback) {
    return callback;
}
console.log(test(callbackFunc));
//Output: [Function: callbackFunc]