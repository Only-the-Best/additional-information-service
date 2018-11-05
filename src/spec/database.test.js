const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const seedFunc = require('../../server/database/data-seed.js');



describe('the database (mongoDB)', () => {

  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__);
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });


  const testSchema = new mongoose.Schema({
    _id: String,
    address: String,
    city: String,
    zip: Number,
    zestimate: [Number],
    beds: Number,
    baths: Number,
    sqFt: Number,
    status: String,
    taxAssessment: Number,
  });

  const Test = mongoose.model('Test', testSchema);
  Test.create(seedFunc());

  test('something', () => {
    
  });


});