//Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument
// Example:
// const func = async () => {
// console.log("Printing before")
// //Call your function here eg. sleep(3000)
// console.log("Printing after")
// }

const stop_exec = (ms) => {
    return new Promise (resolve => setTimeout(resolve, ms));
};
const func = async () => {
    console.log("Printing before")
    //Call your function here eg. sleep(3000)
    await stop_exec(3000);
    console.log("Printing after")
}

func()