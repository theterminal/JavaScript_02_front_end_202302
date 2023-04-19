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
