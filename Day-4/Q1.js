// Create a memoised function that returns the cached value when the same arguments
// are passed.

function memoize(func) {
    let cache = {}; // To store previous results

    return function (arg) {
        if (cache[arg] !== undefined) {
            console.log("Fetching from cache:", arg);
            return cache[arg]; // Returns result from cache
        }

        console.log("Calculating result:", arg);
        let result = func(arg);
        cache[arg] = result; // Stores the result in cache
        return result;
    };
}

function square(number) {
    return number * number;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(6));  // Calculates and stores the result
console.log(memoizedSquare(6));  // Returns result from cache

