//4. What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs 
// in the program? Will other parts of the code execute correctly after that? 

//The code will complete successfully if a regular JSON string is passed, however throws a syntax error for invalid JSON string.
//With such error, program will not run and its execution will be stopped.
console.log(JSON.parse("{name: 'Ashiya', age: 21}")); 
// Uncaught SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2)
