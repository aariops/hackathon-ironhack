'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  country: String,
  cooking: Number,
  cleaning: Number,
  loundry: Number,
  other: Number,
  sex: Number,
  age: Number,
  location: String
});

module.exports = mongoose.model('User', schema);
