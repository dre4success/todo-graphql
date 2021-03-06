import React from 'react';
import ReactDOM from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import './index.css';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';

const prod = 'https://todo-graphql.herokuapp.com/graphql';
const dev = 'http://localhost:2020/graphql';

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NODE_ENV === 'production' ? prod : dev }`}),
  cache: new InMemoryCache()
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
