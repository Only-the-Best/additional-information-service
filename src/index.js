import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { PreQuery} from "./App";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <PreQuery/>
  </ApolloProvider>,
  document.getElementById('app'));