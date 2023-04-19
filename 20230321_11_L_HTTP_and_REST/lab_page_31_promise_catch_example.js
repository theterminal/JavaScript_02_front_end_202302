// JavaScript - REST RESTfull
// Promise - Catch Example


console.log('Before promise');

new Promise(function (resolve, reject) {
    setTimeout(function() {
        reject('fail');
    }, 1500);
})
.then(function(result) { console.log(result); })
.catch(function(error) {console.log(error); });

console.log('After promise');



// Popular Promise Methods
// =======================

// Promise.reject(reason)
//     Returns an object that is rejected with the given reason

// Promise.resolve(value)
//     Returns an object that is resolved with the given value

// Promise.finally()
//     The handler is called when the promise is settled

// Promise.all(iterable)
//     Returns a promise 
//         Fulfills when all of the promises have fulfilled 
//         Rejects as soon as one of them rejects
