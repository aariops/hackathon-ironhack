'use strict';
const { Router } = require('express');
const router = new Router();
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});
router.get('/form', (req, res, next) => {
  res.render('form');
});
router.get('/result', (req, res, next) => {
  res.render('result')
});


router.post('/', (req, res, next) => {
  const country = req.body.country;
  res.render('form');
});

router.get('/form', (req, res, next) => {
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
