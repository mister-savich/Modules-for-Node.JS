// module.exports = exports = this

var User = require('./user');

function run() {
    var john = new User("John");
    var frank = new User("Frank");

    john.hello(frank);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}