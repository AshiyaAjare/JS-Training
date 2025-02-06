// Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
// the data has been received in the fetch.
const stop_exec = (ms) => {
    return new Promise (resolve => setTimeout(resolve, ms));
};

async function fetchAPI() {
        try{
            const result = await fetch("https://reqres.in/api/users");
            const data = await result.json();
            await stop_exec(2000);

            console.log(data);
            return data;    
        }catch(error){
            console.error("Error fetching data from API:", error);
        };
};

fetchAPI();
//Q7 -> to try above assignment using async & await.