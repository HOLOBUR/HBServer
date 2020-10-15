const express = require('express');
const router = express.Router();

const passport = require('passport')

router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

router.post('/signup', passport.authenticate('local.signup', 
{
    successRedirect: '/profile',
    failuereRedirect: '/signup',
    failureFlas: true
}));

router.get('/profile', (req, res) => {
    res.send('Profile')
})

module.exports = router;