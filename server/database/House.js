const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  _id: String,
  address: String,
  city: String,
  zip: Number,
  zestimate: [Number],
  beds: Number,
  baths: Number,
  sqFt: Number,
  status: String,
});


const House = mongoose.model('House', houseSchema);

module.exports = House;
