import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../graphql/queries';

const useSignIn = () => {
  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    }
  });
  const signIn = async ({ username, password }) => {
    login({ variables: { credentials: { username, password } } });
  };

  return [signIn, result];
};

export default useSignIn;