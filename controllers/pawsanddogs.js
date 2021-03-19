const express = require('express');
const router = express.Router();

// MODEL
const Dog = require('../models/dog');

//  RESTFUL ROUTES (with seed route)

// INDEX ROUTE
router.get('/', (req, res)=>{
    Dog.find({}, (error, allDogs)=>{
        res.render('index.ejs', {
            dog: allDogs
        });
    });
});

// NEW ROUTE
router.get('/new', (req, res)=>{
  res.render('new.ejs');
});

// SEED ROUTE
router.get('/seed', (req, res) => {
   
    Dog.create([
        {
            name: 'Huncho',
            breed: 'American Bully',
            description: '',
            img: '',
            age: 2,
            loveable: 9
        },
        {
            name: 'Stella',
            breed: 'Staffordshire Bully',
            description: '',
            img: '',
            age: 5,
            loveable: 10
        },
        {
            name: 'Bear',
            breed: '',
            description: '',
            img: '',
            age: 6,
            loveable: 8
        }
    ], (err, data) => {
        if (err) {
            console.log(err)
        }
        res.redirect('/dogs')
    })
});

module.exports = router;