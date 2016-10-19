var db = require('../db');

db.connect();

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(db.getPhrase("Hello") + ", " + who.name);
};

console.log("user.js is required");

// The exported object is a function User

module.exports = User;

// exports.User = User;
// this.User = User;