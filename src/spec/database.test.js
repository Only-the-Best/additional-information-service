import mongoose from 'mongoose';
import MongoMemoryServer from 'mongodb-memory-server';
const seedFunc = require('../../server/database/data-seed.js');


// May require additional time for downloading MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

let mongoServer;
const opts = { useMongoClient: true }; // remove this option if you use mongoose 5 and above

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, opts, (err) => {
    if (err) console.error(err);
  });
});

afterAll(() => {
  mongoose.disconnect();
  mongoServer.stop();
});

describe('...', () => {
  it("...", async () => {
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
    expect.assertions(1);
    const Test = mongoose.model('Test', testSchema);
    await Test.create(seedFunc());
    const thing = await Test.find({}, (err, results) => {
      expect(results.length).toBe(1);
    })
  });
});

