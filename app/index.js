import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Home from './screens/Home';

// 2
const httpLink = new HttpLink({ uri: 'http://10.0.2.2:3000/graphql' });

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

EStyleSheet.build({
  $primaryBlie: '#4F6D7A',
});
export default () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);
