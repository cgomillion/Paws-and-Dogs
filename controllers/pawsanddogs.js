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
            description: "I am the coolest, cutest, funniest smedium dog you will ever meet! I love to follow my dad around and take naps at any given time; maybe that's why they call me 'Break Time'",
            img: '/assets/F48BFAD3-AA0E-4544-9220-7CE0E5C42B1E_1_105_c.jpeg',
            age: 2,
            loveable: 9,
        },
        {
            name: 'Stella',
            breed: 'Staffordshire Bully',
            description: 'I am the juiciest, prettiest, and sweetest dog of them all. I love my bellyrubs and I will let you know when they end, not you.',
            img: '/assets/1CB2DB6C-240D-4708-8F8F-4650EC214F15_1_105_c.jpeg',
            age: 5,
            loveable: 10,
        },
        // {
        //     name: 'Bear',
        //     breed: '',
        //     description: '',
        //     img: '',
        //     age: 6,
        //     loveable: 8
        // }
    ], (err, data) => {
        if (err) {
            console.log(err)
        }
        res.redirect('/pawsanddogs')
    })
});

// SHOW ROUTE
router.get('/:id', (req, res)=>{
    console.log(req.params.id)
    
    Dog.findById(req.params.id, (err, foundDog)=>{
        res.render('show.ejs', {
            dog: foundDog
        })
    })
  });

module.exports = router;