const mongoose = require('mongoose');

const uri = 'mongodb://localhost/houses';

const db = mongoose.connect(
  uri,
  { useNewUrlParser: true },
);

module.exports = db;
