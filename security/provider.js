const express = require("express");
const passport = require('passport');
const { UserService } = require("../service/userService");
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    async (username, password, done) => {
      const authenticatedUser = await UserService.getAuthenticatedUser();
      if (username === authenticatedUser?.name && password === 'doe') {
        return done(null, { username: authenticatedUser?.name });
      } else {
        return done(null, false, { message: 'Mauvaises informations d\'identification.' });
      }
    }
  ));
  
passport.serializeUser((user, done) => {
    done(null, user.username);
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
    authenticate: passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/backend/login'
    }),
    logout : (req, res) => {
      req.logout();
      res.redirect('/backend/login');
  }
}

module.exports = { AuthProvider, passport, ensureAuthenticated}