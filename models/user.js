'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  country: String,
  name: String
});

module.exports = mongoose.model('User', schema);
