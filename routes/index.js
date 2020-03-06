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

router.post('/form', (req, res, next) => {
  
});

module.exports = router;