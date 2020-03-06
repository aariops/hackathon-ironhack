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
  User.create({
    country: yourCountry
  })
    .then(() => Data.find({ country: yourCountry }))
    .then(data => {
      console.log('the data is', data);
      res.render('form', { yourCountry, data });
    });
  // .then(data => {
  // })
});

router.get('/form', (req, res, next) => {
  // const yourCountry = req.body.country;
  res.render('form');
});

router.post('/form', (req, res, next) => {
  // const { data } = req.body.data;
  res.render('result');
});

router.get('/result', (req, res, next) => {
  res.render('result', { title: 'result page' });
});

module.exports = router;
