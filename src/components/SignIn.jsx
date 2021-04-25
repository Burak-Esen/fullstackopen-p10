import React from 'react';
import { Formik } from 'formik';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './formComponents/FormikTextInput';

const SignInForm = ({ onSubmit, nColor, setNColor, pColor, setPColor }) => {
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderRadius: 5,
      margin: 10,
      padding: 10,
      fontSize: 16
    },
    inputN: {
      borderColor: nColor,
    },
    inputP: {
      borderColor: pColor,
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
  const focusNHandler = () => {setNColor('blue'); setPColor('gray');};
  const focusPHandler = () => {setNColor('gray'); setPColor('blue');};
  return (
    <View style={styles.formCont}>
      <FormikTextInput focusHandler={focusNHandler} style={[styles.input, styles.inputN]} name="username" placeholder="Username" />
      <FormikTextInput focusHandler={focusPHandler} style={[styles.input, styles.inputP]} secureTextEntry name="password" placeholder="Password" />
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
const SignIn = () => {
  const [nColor, setNColor] = React.useState('gray');
  const [pColor, setPColor] = React.useState('gray');
  const onSubmit = values => {
    setNColor('gray');
    setPColor('gray');
    const username = values.username;
    const password = values.password;

    if (username && password) {
      console.log(`Your credentials is: ${username + ' ' + password}`);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => {
        return (<SignInForm onSubmit={handleSubmit} 
          nColor={nColor}
          setNColor={setNColor}
          pColor={pColor}
          setPColor={setPColor}
        />);
      }}
    </Formik>
  );
};

export default SignIn;