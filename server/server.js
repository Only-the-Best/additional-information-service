import mongoose from 'mongoose';
import schema from './schema.js';

const cors = require('cors');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost/houses',
  { useNewUrlParser: true },
);

app.use(cors());
app.use(express.static(`${__dirname}/../public`));

app.get('/:urlId', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
