import ApolloClient from 'apollo-boost';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://172.30.19.10:5000/graphql',
  });
};

export default createApolloClient;