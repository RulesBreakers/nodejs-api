const express = require("express");
const passport = require('passport');
const { UserService } = require("../service/userService");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");

passport.use(new LocalStrategy(
    async (username, password, done) => {
      const authenticatedUser = await UserService.getAuthenticatedUser(username);
      if (username === authenticatedUser?.userName && bcrypt.compare(password, authenticatedUser?.password)) {
        return done(null, authenticatedUser);
      } else {
        return done(null, false, { message: 'Mauvaises informations d\'identification.' });
      }
    }
  ));
  
passport.serializeUser((user, done) => {
    done(null, user.userName);
});
  
passport.deserializeUser((username, done) => {
    done(null, { username: username });
});
  
  
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/backend/login');
    }
};

const AuthProvider = {
    authenticate: passport.authenticate('local'),
    logout : (req, res) => {
      req.logout();
      res.redirect('/backend/login');
  }
}

module.exports = { AuthProvider, passport, ensureAuthenticated}