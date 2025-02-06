// Q1. What happens when you add a for loop/while loop/switch case block inside a function and use 
// return instead of break? Do statements after the loop run? 
// What is the return value? Can we pass a return value from within a loop? 
// Can you return from inside an if block? What impact does that have? 
 
//FOR LOOP
function loop_example() {
    for (let i = 0; i < 5; i++) {
        if (i === 4) {
            return "Loop at i = 4";
        }
        console.log(i);
    }
    console.log("Loop finished");
}
console.log(loop_example());
//Exits function immediately, loop stops.


//WHILE LOOP
function while_loop() {
    let i = 0;
    while (i < 5) {
        if (i === 4) {
            return "Exit";
        }
        console.log(i);
        i++;
    }
    console.log("While loop finished");
}
console.log(testWhile());
//Exits function immediately, loop stops.

//SWITCH CASE
function check_val(value) {
    switch (value) {
        case 1:
            return "1";
        case 2:
            return "2";
        default:
            return "default";
    }
    console.log("Switch case ended");
}
console.log(check_val(2));
//No need for break

//RETURNING FROM INSIDE IF BLOCK
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    }
    return "Zero";
}
console.log(checkNumber(6));
