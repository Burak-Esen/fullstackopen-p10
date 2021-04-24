import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight:'bold',
    textAlign: 'center',
    color: theme.colors.primary
  },
  colorPrimary: {color:theme.colors.textPrimary},
  colorSecondary: {color:theme.colors.textSecondary}
});

const AppBarTab = ({ header, color, style }) => {
  const headerStyle = [
    styles.header,
    color==='textPrimary' && styles.colorPrimary,
    color==='textSecondary' && styles.colorSecondary,
    style
  ];
  return (
    <TouchableWithoutFeedback>
      <Text style={headerStyle}>{ header }</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;