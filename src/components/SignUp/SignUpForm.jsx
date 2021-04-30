import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import { formStyles } from '../../theme';

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={formStyles.formCont}>
      <FormikTextInput style={[formStyles.input, formStyles.inputN]} name="username" placeholder="Username" />
      <FormikTextInput style={[formStyles.input, formStyles.inputP]} secureTextEntry name="password" placeholder="Password" />
      <FormikTextInput style={[formStyles.input, formStyles.inputP]} secureTextEntry name="confirmationPassword" placeholder="Password confirmation" />
      <TouchableWithoutFeedback style={formStyles.input} onPress={onSubmit}>
        <Text style={[formStyles.input, formStyles.buttonText]}>Sign Up</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignUpForm;