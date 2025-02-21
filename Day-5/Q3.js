/*
 Share a minimum four differentiation between regular function and arrow functions with one example each
 */

// Syntax 
// Regular Function: Uses the 'function' keyword.
function regularFunction() {
    return "Hello from Regular Function!";
}

// Arrow Function: Uses the '=>' syntax.
const arrowFunction = () => "Hello from Arrow Function!";

console.log(regularFunction()); // Output: Hello from Regular Function!
console.log(arrowFunction());  // Output: Hello from Arrow Function!

// ------------------------------------------------------------

// new keyword 
// Regular Function: Can be used as a constructor.
function Person(name) {
    this.name = name;
}
const person1 = new Person("John");
console.log(person1.name); // Output: John

// Arrow Function:    Cannot be used as a constructor.
const PersonArrow = (name) => {
    this.name = name;
};
// const person2 = new PersonArrow("Alice"); //    TypeError: PersonArrow is not a constructor

// ------------------------------------------------------------

// this Binding 
const obj = {
    name: "Object Name",
    regularFunction: function () {
        console.log("Regular Function this:", this.name);
    },
    arrowFunction: () => {
        console.log("Arrow Function this:", this.name);
    }
};

obj.regularFunction(); //     Output: Regular Function this: Object Name
obj.arrowFunction();   //    Output: Arrow Function this: undefined

// ------------------------------------------------------------

// Hoisting 
// Regular Function:     Can be called before its definition.
console.log(hoistedFunction()); //     Output: I am a regular function!

function hoistedFunction() {
    return "I am a regular function!";
}

// Arrow Function with `var`:    Variable is hoisted but not the function.
console.log(hoistedArrowFunction()); // TypeError: hoistedArrowFunction is not a function

var hoistedArrowFunction = () => "I am an arrow function!";

// ------------------------------------------------------------

//   Arguments Object 
function regularWithArguments() {
    console.log(arguments); //     Has its own arguments object
}
regularWithArguments(1, 2, 3); // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }

const arrowWithArguments = () => {
    console.log(arguments); //    ReferenceError: arguments is not defined
};
// arrowWithArguments(1, 2, 3);
