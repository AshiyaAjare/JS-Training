//2. What do you think would happen if you pass an index beyond the range of the string? 
// Or if you pass a negative index? Try it out. 

//Accessing a string's index beyond the range or a negative index will return 'undefined' in output.
let str = "Hello World";
console.log(str[20]);  // undefined
console.log(str[-1]);  // undefined
