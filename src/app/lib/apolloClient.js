import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const GQL_URL = process.env["NEXT_PUBLIC_API_URL"];

const httpLink = createHttpLink({
  uri: GQL_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  const token = localStorage.getItem("mt-token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,

      authorization: token ? `${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
