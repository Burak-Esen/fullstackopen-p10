import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';

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
const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.formCont}>
      <FormikTextInput style={[styles.input, styles.inputN]} name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput style={[styles.input, styles.inputP]} name="repositoryName" placeholder="Repository name" />
      <FormikTextInput style={[styles.input, styles.inputN]} name="rating" placeholder="Rating between 0 and 100" keyboardType='numeric' />
      <FormikTextInput style={[styles.input, styles.inputP]} name="text" placeholder="Review" />
      <TouchableWithoutFeedback style={styles.input} onPress={onSubmit}>
        <Text style={[styles.input, styles.buttonText]}>Create a review</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ReviewForm;