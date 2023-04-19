// JavaScript - REST RESTfull
// Promise - Then Example


console.log('Before promise');

new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve('done');
    }, 1500);
})
.then(function(res) {
    console.log('Then returned: ' + res);
});

console.log('After promise');
