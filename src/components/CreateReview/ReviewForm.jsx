import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import { formStyles } from '../../theme';

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={formStyles.formCont}>
      <FormikTextInput style={[formStyles.input, formStyles.inputN]} name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput style={[formStyles.input, formStyles.inputP]} name="repositoryName" placeholder="Repository name" />
      <FormikTextInput style={[formStyles.input, formStyles.inputN]} name="rating" placeholder="Rating between 0 and 100" keyboardType='numeric' />
      <FormikTextInput style={[formStyles.input, formStyles.inputP]} name="text" placeholder="Review" />
      <TouchableWithoutFeedback style={formStyles.input} onPress={onSubmit}>
        <Text style={[formStyles.input, formStyles.buttonText]}>Create a review</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ReviewForm;