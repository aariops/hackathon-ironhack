const mongoose = require('mongoose');



const DataSchema = new mongoose.Schema({
  country: String,
  year: Number,
  value: Number,
  source: String,
  age: Array,
  location: String,
  sex: Number,
  country_desagg: Number
});

const Data = mongoose.model('data', DataSchema);

module.exports = Data;
