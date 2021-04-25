import React from 'react';
import { Formik } from 'formik';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './formComponents/FormikTextInput';
import * as yup from 'yup';

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    input: {
      margin: 10,
      padding: 10,
      fontSize: 16,
      borderRadius: 5
    },
    formCont: {
      flex: 1,
    },
    buttonText: {
      borderWidth:0,
      backgroundColor: '#0060A7',
      color: 'white',
      padding: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16
    },

  });
  return (
    <View style={styles.formCont}>
      <FormikTextInput style={[styles.input, styles.inputN]} name="username" placeholder="Username" />
      <FormikTextInput style={[styles.input, styles.inputP]} secureTextEntry name="password" placeholder="Password" />
      <TouchableWithoutFeedback style={styles.input} onPress={onSubmit}>
        <Text style={[styles.input, styles.buttonText]}>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const initialValues = {
  username: '',
  password: '',
};
const validatSchema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Pasword is required.')
});
const SignIn = () => {
  const onSubmit = values => {
    const username = values.username;
    const password = values.password;
    if (username && password) {
      console.log(`Your credentials is: ${username + ' ' + password}`);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validatSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/> }
    </Formik>
  );
};

export default SignIn;