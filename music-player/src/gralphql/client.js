import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

export const client = new ApolloClient({
    link : new WebSocketLink({
        uri : 'wss://pleasing-frog-31.hasura.app/v1/graphql',
        options: {
            reconnect: true,
            connectionParams : {
                headers : {'x-hasura-admin-secret' : '4Ahiqh6Eo8GK55U3eZp8zmTMX5JRXNvPjiPnYvMGAK7jzT9jW8R0Oq9Ixdp5fNaX' },
            }
        }
    }),
    cache: new InMemoryCache()
});