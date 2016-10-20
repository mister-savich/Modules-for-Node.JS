var db = require('../db');

var log = require('../logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log(db.getPhrase("Hello") + ", " + who.name);
};

console.log("user.js is required");

// The exported object is a function User

module.exports = User;

// exports.User = User;
// this.User = User;