import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from '../formComponents/FormikTextInput';

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

export default SignInForm;