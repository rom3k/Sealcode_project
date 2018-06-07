var express = require("express");
var router = express.Router();
var passport = require("passport");
var localStrategy = require('passport-local').Strategy;

var User = require("./users");

router.get('/', (req, res) => {
    res.end("Hello");
});

router.post("/register", (req, res) => {

    var username = req.body.username;
    var password = req.body.password;

    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        console.log("error");
    }
    else {
        var newUser = new User({
            username: username,
            password: password
        });

        User.createUser(newUser, (err, user) => {
            if(err) throw err;
            console.log(user);
        });

        console.log("User registered");
    }
});

passport.use(new localStrategy(
    (username, password, done) => {
        User.getUserByUsername(username, (err, user) => {
            if(err) throw err;
            if(!user) {
                return done(null, false, {message : 'Unknown user'});
            }
            
            User.comparePassword(password, user.password, (err, match) => {
                if (err) throw err;
                if (match) {
                    return done(null, user);
                }
                else {
                    return done(null, false, { message: 'Invalid password'});
                }
            })

        });    
    }
));


router.post("/login", (req, res) => {
    passport.authenticate('local', {succes: '/', failure: '/login'}, (req, res) => {
        res.end("WORKING!");
    })
})


module.exports = router;