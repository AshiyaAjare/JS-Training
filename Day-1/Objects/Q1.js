let person = { 
    name: "Harry Potter", 
    age: 12, 
    address: { 
        details: ["4", "Privet Drive"], 
        area: "Little Whinging", 
        city: "Surrey", 
        state: "England" 
    } 
};

// Creating a deep copy and modifying details[0]
let Person2 = {
    ...person, 
    address: { 
        ...person.address, 
        details: [...person.address.details] // Copying array to avoid mutation
    }
};

newPerson.address.details[0] = "3"; 

console.log(Person2);
console.log(person); 