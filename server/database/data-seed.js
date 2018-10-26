const faker = require('faker');
const House = require('./House.js');
const db = require('./index.js');
const mongoose = require('mongoose');

const random = (num) => {
  return Math.ceil(Math.random() * num);
};

const zestHistory = () => {

  const years = 5 + random(5);
  const months = random(12);
  let padding = 1500;

  return Array.from({ length: years * 12 + months }, () => {
    padding += 1500;
    return 300000 + random(50000) + padding;
  });
};

const seed = Array.from({ length: 100 }, () => {
  return {
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    zip: 98100 + random(99),
    zestimate: zestHistory(),
    beds: 3 + random(1),
    baths: 2.5 + 0.5 * Math.floor(Math.random() * 3),
    sqFt: 1150 + 10 * random(20),
    status: Math.random() < 0.5 ? 'For Sale' : 'Sold',
  };
});

const seedDatabase = () => {
  House.create(seed)
    .then(() => mongoose.connection.close())
    .catch(err => console.error(err));
};

seedDatabase();
