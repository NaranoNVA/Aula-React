import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri : 'https://pleasing-frog-31.hasura.app/v1/graphql',
    headers : {
        'content-type' : 'application/json', 
        'x-hasura-admin-secret' : '4Ahiqh6Eo8GK55U3eZp8zmTMX5JRXNvPjiPnYvMGAK7jzT9jW8R0Oq9Ixdp5fNaX' },
    cache: new InMemoryCache(), 
});