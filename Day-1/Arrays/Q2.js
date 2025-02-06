
// 2. What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating 
// or non-mutating. How can you verify this?: 
// ○ push

// ○ pop

// ○ filter

// ○ find

// ○ sort

// ○ map

//Answer: A method is considered mutating or non-mutating based on whether the use of that method modifies the original object.

//push - Push is a mutating method. Here after a element is pushed, original array gets modified
const arr = [1,2,3,4]
arr.push(6)
console.log(arr)

//pop -It is a mutating method. This method adds a new element to the original array, thus mutating it.
// const arr = [1,2,3,4]
arr.pop()
console.log(arr) //1,2,3

//filter - Filter is a non-mutating method in JS. It creates a new array with the elemnts that adhere to the requirement.
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAge);

function checkAge(age) {
  return age >= 18;
}
console.log(result)

//find - This non-mutating method returns the value of the first element that passes a test.
const result_find = ages.find(checkAge);
console.log(result_find);

// sort - by default, sorts the values as strings
ages.sort();
console.log(ages);
//To sort an array in descending order
ages.sort(function(a, b){return b - a});

// map - It is a non-mutating method, which creates a new array by calling the function for each element.
ages.map(myFun);

function myFun(num) {
    num*2;
}