const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  country: String,
  location_desagg: Boolean,
  location: String,
  value: Number,
  age: Array,
  gender: Number
});

const Data = mongoose.model('data', DataSchema);

module.exports = Data;
