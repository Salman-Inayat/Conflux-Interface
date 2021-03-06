import React from "react";
import SideBar from "./Components/SideBar";
import Grid from "@material-ui/core/Grid";
import Header from "./Components/Header";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:8080/v1/graphql",
    }),
    defaultOptions: defaultOptions,
    cache: new InMemoryCache(),
  });
};

const App = () => {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <Grid container spacing={2}>
        <Grid  item md={12} xs={12}>
          <Header />
        </Grid>
        <Grid item  md={12}>
          <SideBar />
        </Grid>
      </Grid>
    </ApolloProvider>
  );
};

export default App;
