const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// Load User model
const Students = require('../models/Students');

// export the passport middleware function

module.exports = function (passport) {
  // define the strategy
 passport.use(new LocalStrategy({
  usernameField: 'email'
 }, (email, password, done) => { 

   // check if user exist in the db with email same as from the request 
  Students.findOne({
   email: email
  }).then(Student => {
   if (!Student) {
    return done(null, false, {
     message: 'That email is not registered'
    });
   }
   
   // Match password
   bcrypt.compare(password, Student.password, (err, isMatch) => {
    if (err) throw err;
    if (isMatch) {
     return done(null, Student);
    } else {
     return done(null, false, {
      message: 'Incorrect Password or Email'
     });
    }
   });
  });
 }));
 passport.serializeUser(function (Student, done) {
  done(null, Student.id);
 });
 passport.deserializeUser(function (id, done) {
  Students.findById(id, function (err, Student) {
   done(err, Student);
  });
 });
};