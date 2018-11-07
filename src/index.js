import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { PreQuery } from './components/PreQuery.js';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <PreQuery />
  </ApolloProvider>,
  document.getElementById('app'),
);
