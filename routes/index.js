'use strict';
const { Router } = require('express');
const router = new Router();
const countries = require('./../countries');
const User = require('./../models/user');
const Data = require('./../models/data');

router.get('/', (req, res, next) => {
  res.render('index', { countries });
});
router.get('/form', (req, res, next) => {
  res.render('form');
});
router.get('/result', (req, res, next) => {
  res.render('result');
});

router.post('/', (req, res, next) => {
  const yourCountry = req.body.country;
  let userId;
  User.create({
    country: yourCountry
  })
    .then(user => {
      userId = user._id;
      console.log(userId);
      Data.find({ country: yourCountry });
    })
    .then(data => {
      res.render('form', { yourCountry, data, userId });
    });
  // .then(data => {
  // })
});

router.post('/form/:id', (req, res, next) => {
  const id = req.params.id;
  const { cooking, cleaning, loundry, other, sex, age, location } = req.body;
  User.findOneAndUpdate(
    id,
    {
      cooking: cooking,
      cleaning: cleaning,
      loundry: loundry,
      other: other,
      sex: sex,
      age: age,
      location: location
    },
    { new: true }
  )
    .then(user => {
      console.log('user', user.country, user.sex, user.location);
      Data.findOne({ country: user.country });
    })
    .then(data => console.log(data));
  res.render('result');
});

module.exports = router;
