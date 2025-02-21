//4. Accomplish the same using a while loop. 


//FOR LOOP
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) break;
//     console.log(i);
// }
// console.log("Loop ended.");

//WHILE LOOP
let i = 1;
while (i <= 10) {
    if (i === 5) break;
    console.log(i);
    i++;
}
console.log("Loop ended.");


//for arraySize=25
arraySize = 25;
let arr2 = [];
let j = 1;
while (j <= arraySize) {
arr2.push(j);
j++;
}
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]                                       
