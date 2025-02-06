// 1. Declare a variable - let a;. On another line assign any value you like to a. Log the value of a before and after assignment. Try doing the same with const.

// let a; 
// console.log(a); // Output: undefined
// a = 10; 
// console.log(a); // Output: 10


// const b; // SyntaxError: Missing initializer in const declaration
// b = 20;
// console.log(b);

// const b = 20;
// console.log(b); // Output: 20
// b = 30; // TypeError: Assignment to constant variable.


//2. Use the typeof operator to find the types of different variables. Specially note what t typeof operator returns for arrays,
// null values and NaN. How can you find if a variable an array or NaN besides typeof?
// console.log(typeof 11); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof "Hello World"); // "string"
// console.log(typeof function() {}); // "function"
// console.log(typeof undefined); // "undefined"
// console.log(typeof {}); // "object"

//3. Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. 
//What do you expect to happen in both cases? What actually happens in both cases. What is the difference between an object declared as a let or a const variable?

// let arr = [1, 2, 3];
// arr.push(4); // Allowed
// console.log(arr); // [1, 2, 3, 4]

// arr = [5, 6, 7]; // Allowed
// console.log(arr); // [5, 6, 7]


// //6
// const person = { name: "Alice", age: 25 };
// person.age = 30; // Allowed
// person.city = "New York"; // Allowed
// console.log(person); // { name: "Alice", age: 30, city: "New York" }

// person = { name: "Bob" }; // TypeError: Assignment to constant variable.



