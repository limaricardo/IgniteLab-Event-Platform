import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4om8wei0nzd01w72ot7fzlv/master",
  cache: new InMemoryCache(),
});
