function filterObj(obj) {
    let filtered = {};

    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value !== "object" || value === null) {
            filtered[key] = value;
        }
    });

    return filtered;
}

// Example object
let obj = { 
    a: "Apple", 
    b: ["Basketball", "Baseball"], 
    c: { call: "cellphone" }, 
    d: "Dog"
};

console.log(filterObj(obj)); 
// Output: { a: "Apple", d: "Dog" }
