'use client'
import client from "@/app/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

const Wrapper = ({children}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default Wrapper;
