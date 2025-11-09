import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: process.env.EXPO_PUBLIC_COUNTRIES_API || "", 
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});