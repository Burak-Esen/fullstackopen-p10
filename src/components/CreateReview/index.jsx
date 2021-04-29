import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';
import ReviewForm from './ReviewForm';
import useCreateReview from '../../hooks/useCreateReview';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text:''
};
const validatSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().required('Rating is required'),
  text: yup.string()
});

export const FormContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validatSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit}/> }
    </Formik>
  );
};

const CreateReview = () => {
  const history = useHistory();

  const [createReview, result] = useCreateReview();
  React.useEffect(() => {
    if ( result.data ) {
      history.push(`/repo/${result.data.createReview.repository.id}`);
    }
  }, [result.data]);
  const onSubmit = values => {
    if (values.ownerName && values.repositoryName && values.rating) {
      createReview({ variables:{ review: {...values, rating:Number(values.rating)} } });
    }
  };

  return <FormContainer onSubmit={onSubmit} />;
};

export default CreateReview;