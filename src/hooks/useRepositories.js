import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });
  let repositories;
  if (!loading) {
    repositories = data.repositories;
  }
  return { repositories, loading, error };
};

export default useRepositories;