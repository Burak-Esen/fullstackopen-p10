import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';
import storage from './storage';

const createApolloClient = () => {
  return new ApolloClient({
    request: async (operation) => {
      try {
        const accessToken = await storage.getData('accessToken');
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
    uri: Constants.manifest.extra.APOLLO_URI,
  });
};

export default createApolloClient;