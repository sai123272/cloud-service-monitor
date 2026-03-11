import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://example.com/graphql" // dummy endpoint
  }),
  cache: new InMemoryCache()
});

export default client;