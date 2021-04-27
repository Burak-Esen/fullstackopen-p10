import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './SignInForm';
import { useHistory } from 'react-router-native';
import useSignIn from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
};
const validatSchema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Pasword is required.')
});

export const FormContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validatSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/> }
    </Formik>
  );
};

const SignIn = () => {
  const history = useHistory();
  const [signIn, result] = useSignIn();
  React.useEffect(() => {
    if ( result.data ) {
      history.push('/');
    }
  }, [result.data]);
  const onSubmit = values => {
    if (values.username && values.password) {
      signIn(values);
    }
  };

  return <FormContainer onSubmit={onSubmit} />;
};

export default SignIn;