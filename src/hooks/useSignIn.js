import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../graphql/queries';
import { useContext } from 'react';
import StorageContext from '../contexts/StorageContext';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const storage = useContext(StorageContext);
  const apolloClient = useApolloClient();
  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    }
  });
  const signIn = async ({ username, password }) => {
    const { data } = await login({ variables: { credentials: { username, password } } });
    await storage.storeData('accessToken', data.authorize.accessToken);
    console.log(data.authorize.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;