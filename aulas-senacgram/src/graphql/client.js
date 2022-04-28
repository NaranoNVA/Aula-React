import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://cute-pika-46.hasura.app/v1/graphql',
    headers: { 'x-hasura-admin-secret': '4jPyp5j9pBOq0217WXMTgKPbFGwlSSg5nrNHUjmyQDcf2EpU9TwX6iCS8Gff0xC2' },//'0jp1wFdiMXoNuRozBN8FnQnODKWnwkIOIJmYYLQv884KrZZqFuq9IjL7l1vmBEKx' },
    cache: new InMemoryCache()
});

export default client;