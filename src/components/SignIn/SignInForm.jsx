import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import { formStyles } from '../../theme';

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={formStyles.formCont}>
      <FormikTextInput testID="usernameInput" style={[formStyles.input, formStyles.inputN]} name="username" placeholder="Username" />
      <FormikTextInput testID="passwordInput" style={[formStyles.input, formStyles.inputP]} secureTextEntry name="password" placeholder="Password" />
      <TouchableWithoutFeedback testID="submitButton" style={formStyles.input} onPress={onSubmit}>
        <Text style={[formStyles.input, formStyles.buttonText]}>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;