// JavaScript Callback function


// ______________ version 01 __________________ from PDF


function running() {
    return "Running";
}

function category(run, type) {
    console.log(run() + " " + type);
}


category(running, "sprint");                                                    // Running sprint


// ______________ version 02 __________________ from CGPT4


function fetchData(url, callback) {
    fetch(url)                                                                  // make an HTTP request to the specified URL
        .then(response => response.json())
        .then(data => {
            callback(data);                                                     // call the callback function with the retrieved data
        });
}
  
function logData(data) {                                                        // define a callback function that logs the data to the console
    console.log(data);
}
  
fetchData('https://example.com/data', logData);                                 // call the fetchData function and pass in the logData function as a callback
  

/*

In this example, we define a fetchData function that takes a URL and a callback function as arguments.
The fetchData function makes an HTTP request to the specified URL using the fetch API, and when the data is retrieved, it calls the callback function with the data as an argument.
We also define a logData function that simply logs the data to the console, and then we call the fetchData function and pass in logData as the callback function.

When the fetchData function completes its task, it calls the logData function with the retrieved data as an argument.
This allows us to execute code in response to the completion of an asynchronous task, without blocking the main thread of execution.

*/
