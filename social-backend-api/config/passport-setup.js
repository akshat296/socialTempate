const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(new GoogleStrategy({
callURL:'/auth/google/redirect',
clientID:'keys.google.clientID',
clientSecret:'keys.google.clientSecret'
},(accessToken,refrestToken,profile,done)=>{

    console.log("passport callback function fired");
    console.log(profile);
}));


