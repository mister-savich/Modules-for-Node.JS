var user = require('./user');

function run() {
    var john = new user.User("John");
    var frank = new user.User("Frank");

    john.hello(frank);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}