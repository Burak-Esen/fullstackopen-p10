import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  background :{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 40,
  },
  fancyColor: {
    color:theme.colors.fancyHeaderBar
  }
});

const AppBar = ({ backgroundColor }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', backgroundColor==='fancy' ? styles.fancyColor.color : backgroundColor]}
        style={styles.background}
      />
      <AppBarTab header='Repositories' color='textPrimary' />
    </View>
  );
};

export default AppBar;