import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://cute-pika-46.hasura.app/v1/graphql",
    headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret' : '4jPyp5j9pBOq0217WXMTgKPbFGwlSSg5nrNHUjmyQDcf2EpU9TwX6iCS8Gff0xC2' 
    },
    cache : new InMemoryCache
});

console.log(client);

ReactDOM.render(
    <ApolloProvider client={client}>
        <App></App>
    </ApolloProvider>, 
    document.getElementById("root")
);