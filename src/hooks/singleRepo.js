import { useLazyQuery } from '@apollo/react-hooks';
import { GET_A_REPO } from '../graphql/queries';

const useRepo = () => {
  const [ getRepo, result ] = useLazyQuery(GET_A_REPO,{
    fetchPolicy: 'cache-and-network'
  });
  return { getRepo, result };
};

export default useRepo;