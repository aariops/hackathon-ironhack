'use strict';
const { Router } = require('express');
const router = new Router();
const countries = require('./../countries');

router.get('/', (req, res, next) => {
  res.render('index', { countries });
});
router.get('/form', (req, res, next) => {
  res.render('form');
});
router.get('/result', (req, res, next) => {
  res.render('result')
});


router.post('/', (req, res, next) => {
  const yourCountry = req.body.country;
  User.Create({
    name: 
  })
  res.render('form', yourCountry);
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
