import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';


const TextInput = ({ secureTextEntry, style, error, ...props }) => {
  const [ borderC, setBorderC] = React.useState('gray');
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: borderC,
      borderRadius: 5,
      margin: 10,
      padding: 10,
      fontSize: 16
    }
  });
  const textInputStyle = [style, styles.input, styles.inputN];
  React.useEffect(() => {
    if (error) { setBorderC('#d73a4a'); } else { setBorderC('gray'); }
  }, [error]);
  return (
    <NativeTextInput secureTextEntry={secureTextEntry}
      style={textInputStyle} {...props}
    />
  );
};

export default TextInput;