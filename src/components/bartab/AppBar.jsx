import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import { Link } from "react-router-native";

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
  },
  barTabCont: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

const AppBar = ({ backgroundColor }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['white', backgroundColor==='fancy' ? styles.fancyColor.color : backgroundColor]}
        style={styles.background}
      />
      <View style={styles.barTabCont}>
        <Link to='/' component={TouchableOpacity} activeOpacity={0.1}>
          <AppBarTab header='Repositories' color='textPrimary' />
        </Link>
        <Link to='/signin' component={TouchableOpacity} activeOpacity={0.1}>
          <AppBarTab header='Sign In' color='textPrimary' />
        </Link>
      </View>
    </View>
  );
};

export default AppBar;