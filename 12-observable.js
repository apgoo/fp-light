var a = new Rx.Subject();

setInterval(function everySecond() {
    a.next(Math.random());
}, 1000);

var b = a.map(function(va) {
    return va * 2;
});

b.subscribe(function(val) {
    console.log(val);
});
