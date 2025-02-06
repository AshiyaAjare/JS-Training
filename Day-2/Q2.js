//Using promises - write a function that fetches data from an API endpoint (GET
// https://reqres.in/api/users ). Log the data into the console once it is received

function fetchAPI() {
    return new Promise((resolve) => {
        fetch("https://reqres.in/api/users")
            .then(result => result.json())
            .then(data => {
                console.log(data);
                resolve(data);
            })
            .catch(error => {
                console.error("Error fetching data from API:", error);
            });
    });
}

fetchAPI();
