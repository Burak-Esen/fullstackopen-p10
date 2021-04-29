import { useQuery } from '@apollo/react-hooks';
import { ME } from '../graphql/queries';

const useMe = () => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    }
  });
  let me;
  if (!loading) {
    me = data.authorizedUser;
  }

  return { me, error, loading };
};

export default useMe;