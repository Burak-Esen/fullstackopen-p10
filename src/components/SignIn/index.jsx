import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './SignInForm';
import { Redirect} from 'react-router-native';
import storage from '../../utils/storage';
import useSignIn from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
};
const validatSchema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Pasword is required.')
});

const SignIn = () => {
  const [redirectFlag, setRedirectFlag] = React.useState(false);
  const [signIn, result] = useSignIn();
  React.useEffect(() => {
    if ( result.data ) {
      storage.storeData('accessToken', result.data.authorize.accessToken);
      setRedirectFlag(true);
    }
  }, [result.data]);
  const onSubmit = values => {
    if (values.username && values.password) {
      signIn(values);
    }
  };
  if (redirectFlag) {
    return <Redirect to='/' />;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validatSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/> }
    </Formik>
  );
};

export default SignIn;