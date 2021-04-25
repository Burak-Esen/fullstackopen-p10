import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const TextInput = ({ secureTextEntry, style, focusHandler, error, ...props }) => {
  const textInputStyle = [style];

  return (
    <NativeTextInput onFocus={focusHandler} secureTextEntry={secureTextEntry}
      style={textInputStyle} {...props}
    />
  );
};

export default TextInput;