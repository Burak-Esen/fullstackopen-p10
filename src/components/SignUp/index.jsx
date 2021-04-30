import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  confirmationPassword: ''
};

const validatSchema = yup.object().shape({
  username: yup.string().required('Username is required').max(30, 'Username max length is ${max} chars'),
  password: yup.string().required('Password is required.').min(5, 'Password min length is ${min} chars ')
    .max(50, 'Password max length is ${max} chars'),
  confirmationPassword: yup.string().required('Password confirmation is required.')
    .oneOf([yup.ref('password')], 'Password & confirmation are not match'),
});

export const FormContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validatSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit}/> }
    </Formik>
  );
};

const SignUp = () => {
  const history = useHistory();
  const [signIn, result] = useSignIn();
  const [signUp, resultS] = useSignUp();
  const [credentials, setCredentials] = React.useState(null);
  React.useEffect(() => {
    if ( resultS.data ) {
      signIn(credentials);
    }
    if ( result.data ) {
      history.push('/');
    }
  }, [resultS.data, result.data]);
  const onSubmit = values => {
    if (values.username && values.password) {
      signUp({ variables:{ user: { username:values.username, password:values.password } } });
      setCredentials(values);
    }
  };

  return <FormContainer onSubmit={onSubmit} />;
};

export default SignUp;