import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/queries';

const useCreateReview = () => {
  const [createReviev, result] = useMutation(CREATE_REVIEW, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    }
  });

  return [createReviev, result];
};

export default useCreateReview;