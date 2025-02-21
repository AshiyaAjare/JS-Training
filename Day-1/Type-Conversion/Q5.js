//5. Can you use return instead of break in loops? 

function loop_example() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) return;
        console.log(i);
    }
    console.log("Loop ended."); // This will NOT execute!
}

loop_example();


//Return Exits the function completely