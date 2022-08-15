var promise = new Promise(function (resolve, reject) {
    resolve(console.log('foo'));
});
var fctn = function () {
    console.log('bar');
}

promise.then(fctn).then(function () {
    console.log('foobar');
});