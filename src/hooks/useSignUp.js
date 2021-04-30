import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../graphql/queries';

const useSignUp = () => {
  const [signUp, result] = useMutation(CREATE_USER, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    }
  });

  return [signUp, result];
};

export default useSignUp;