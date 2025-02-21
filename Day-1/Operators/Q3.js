//Do you think JSON.stringify would work for arrays as well? What about nested objects? 
// What happens if we pass numbers, strings, undefined, null to JSON.stringify?

//with array
let arr = [1, 2, 3];
console.log(JSON.stringify(arr)); // "[1,2,3]"


//with object
let obj = { name: "Alice", age: 25, address: { city: "New York" } };
console.log(JSON.stringify(obj)); // '{"name":"Alice","age":25,"address":{"city":"New York"}}'

//For undefined and null, "null" remains same (converted to 'null')  & 'undefined' is ignored.