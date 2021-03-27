const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');


//  NEW USER ROUTE
router.get('/new', (req, res) => {
    res.render('users/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// POST USER ROUTE / CREATE USER
router.post('/', (req, res) => {
    
    // HASHING and SALTING THE PASSWORD
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

    User.create(req.body, (error, createdUser) => {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            res.send(createdUser)
            console.log(createdUser)
            res.redirect('/')
        }
        
    })
})

module.exports = router
