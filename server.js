// module.exports = exports = this

var db = require('db');
db.connect();

var log = require('logger')(module);

var User = require('./user');

function run() {
    var john = new User("John");
    var frank = new User("Frank");

    john.hello(frank);
    log(db.getPhrase("Run successful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}