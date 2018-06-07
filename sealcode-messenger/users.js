var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/Sealcode");
var db = mongoose.connection;

var UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

var User = module.exports = mongoose.model('users', UserSchema);

module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt)  => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.getUserByUsername = (username, callback) => {
    var query = {username: username};
    User.findOne(query, callback);
};

module.exports.comparePassword = (input, hash, callback) => {
    bcrypt.compare(input, hash, (err, match) => {
        if (err) throw err;
        callback(null, match);
    });
}